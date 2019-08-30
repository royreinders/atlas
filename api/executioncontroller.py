from subprocess import run, PIPE, STDOUT
from threading import Thread, Lock
from queue import Queue, Empty
from .models import ProofOfConcept


class Executioncontroller:

    # Execute parse command and handle threading
    def execute(self, task):
        queue = Queue()
        task.running = 1
        task.targets_completed = 0
        task.completed = 0
        task.save()
        for service in task.services.all():
            queue.put_nowait(service)
        for _ in range(task.threads):
            Worker(queue, task).start()
        # queue.join()  # blocks until the queue is empty.

    # Execute a single command and return output (for testing purposes)
    @staticmethod
    def execute_test(command):
        try:
            print(command)
            tool_output = run(command, shell=True, check=True, timeout=60, stdout=PIPE, stderr=STDOUT)
            return tool_output.stdout.decode('utf-8')
        except Exception as ex:
            print(ex)
            print("Command execution failed")
            return "Command execution failed"

class Worker(Thread):
    def __init__(self, queue, task, *args, **kwargs):
        self.queue = queue
        self.tool = task.tool
        self.task = task
        super().__init__(*args, **kwargs)

    # ToDo: Some "smarter" error catching and thread monitoring?
    # Get task (command) from queue and execute a shell command in a new thread
    def run(self):
        while True:
            try:
                service = self.queue.get()
            except Empty:
                self.task.running = 0
                self.task.completed = 1
                self.task.save()
                return
            tool_output = self.shell_execute(service, self.tool)
            if not tool_output:
                self.task.error = 1
            else:
                service.haspoc = 1
                service.save()
                ProofOfConcept.objects.create(service=service, info=self.task.tool.name, poc=tool_output)
                self.queue.task_done()
                if self.queue.empty():
                    self.task.running = 0
                    self.task.completed = 1
                    self.task.targets_completed += 1
                    self.task.save()

    # ToDo: Do more input sanitazation to prevent execution of unwanted commands
    # Execute command and return STDOUT and STDERR
    def shell_execute(self, service, tool):
        try:
            command = self.parse_command(tool.commandstring, service.host.ip, service.port)
            print(command)
            tool_output = run(command, shell=True, check=True, timeout=tool.timeout, stdout=PIPE, stderr=STDOUT)
            return tool_output.stdout.decode('utf-8')
        except Exception as ex:
            print(ex)
            print("Command execution failed")
            return None

    # Parse command string to include host and port parameters
    def parse_command(self, commandstring, host, port):
        command = commandstring
        if host:
            command = command.replace("<host>", host)
        if port:
            command = command.replace("<port>", str(port))
        return command


from subprocess import run, PIPE, STDOUT
from threading import Thread, Lock
from queue import Queue, Empty
from .models import ProofOfConcept


class Executioncontroller:

    # Execute parse command and handle threading
    def execute(self, task):
        queue = Queue()

        # Mark the task as running
        task.running = 1
        task.targets_completed = 0
        task.completed = 0
        task.errormessage = ""
        task.save()
        # Fill queue and execute threads
        for service in task.services.all():
            queue.put_nowait(service)
        for _ in range(task.threads):
            Worker(queue, task).start()
        queue.join()  # blocks until the queue is empty. An empty queue does not mean all tasks are completed

        # Mark the task as complete
        task.running = 0
        task.completed = 1
        task.save()

    # ToDo: Add timout given by frontend
    # Execute a single command and return output (for testing purposes)
    @staticmethod
    def execute_test(command):
        error = False
        try:
            tool_output = run(command, shell=True, check=True, timeout=60, stdout=PIPE, stderr=STDOUT)
            return "$ " + command + "\n" + tool_output.stdout.decode('utf-8'), error
        except Exception as ex:
            error = True
            return "$ " + command + "\n" + ex.output.decode('utf-8'), error

class Worker(Thread):
    def __init__(self, queue, task, *args, **kwargs):
        self.queue = queue
        self.tool = task.tool
        self.task = task
        super().__init__(*args, **kwargs)

    # Get task (command) from queue and execute a shell command in a new thread
    def run(self):
        while True:
            try:
                service = self.queue.get()
            except Empty:
                return
            tool_output, error = self.shell_execute(service, self.tool)
            if error:
                self.task.error = 1
                self.task.errormessage += tool_output + "\n\n"
            else:
                service.haspoc = 1
                service.save()
                ProofOfConcept.objects.create(service=service, info=self.task.tool.name, poc=tool_output)
                self.task.targets_completed += 1
                self.task.save()
            self.queue.task_done()  # Mark queue item as done

    # ToDo: Do more input sanitazation to prevent execution of unwanted commands
    # Execute command and return STDOUT and STDERR
    def shell_execute(self, service, tool):
        error = False
        command = self.parse_command(tool.commandstring, service.host.ip, service.port)
        try:
            tool_output = run(command, shell=True, check=True, timeout=tool.timeout, stdout=PIPE, stderr=STDOUT)
            return "$ " + command + "\n" + tool_output.stdout.decode('utf-8'), error
        except Exception as ex:
            error = True
            return "$ " + command + "\n" + ex.output.decode('utf-8'), error

    # Parse command string to include host and port parameters
    def parse_command(self, commandstring, host, port):
        command = commandstring
        if host:
            command = command.replace("<host>", host)
        if port:
            command = command.replace("<port>", str(port))
        return command


from subprocess import run, PIPE, STDOUT
from threading import Thread, Lock
from queue import Queue, Empty


class Executioncontroller:

    # Execute parse command and handle threading
    def execute(self, task):
        queue = Queue()
        task.running = 1
        task.completed = 0
        task.save()
        for poc in task.pocs.all():
            queue.put_nowait(poc)
        for _ in range(task.threads):
            Worker(queue, task).start()
        # queue.join()  # blocks until the queue is empty.


class Worker(Thread):
    def __init__(self, queue, task, *args, **kwargs):
        self.queue = queue
        self.tool = task.tool
        self.task = task
        super().__init__(*args, **kwargs)

    # ToDo: Some "smarter" error catching and thread monitoring?
    # ToDo: If POC alreadt exists, insert new POC
    # Get task (command) from queue and execute a shell command in a new thread
    def run(self):
        while True:
            try:
                poc = self.queue.get()
            except Empty:
                self.task.running = 0
                self.task.completed = 1
                self.task.save()
                return
            poc_output = self.shell_execute(poc, self.tool)
            if poc.haspoc == 1:
                poc.pk = None   # Clone object and insert as new POC # ToDo: Wil ik dit wel, is het in de frontend handig om meerdere POCS te hebben?
            poc.poc = poc_output
            poc.haspoc = 1
            poc.save()
            self.queue.task_done()
            if self.queue.empty():
                self.task.running = 0
                self.task.completed = 1
                self.task.save()

    # Execute command and return STDOUT and STDERR
    def shell_execute(self, poc, tool):
        try:
            command = self.parse_command(tool.executionstring, poc.service.host.ip, poc.service.port)
            print(command)
            tool_output = run(command, shell=True, check=True, timeout=tool.timeout, stdout=PIPE, stderr=STDOUT)
            return tool_output.stdout
        except Exception as ex:
            print(ex)
            print("Command execution failed")

    # Parse command string to include host and port parameters
    def parse_command(self, commandstring, host, port):
        command = commandstring
        if host:
            command = command.replace("<host>", host)
        if port:
            command = command.replace("<port>", str(port))
        return command

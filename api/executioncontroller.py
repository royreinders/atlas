from subprocess import run, PIPE, STDOUT
from threading import Thread, Lock
from queue import Queue, Empty


class Executioncontroller:

    # Execute parse command and handle threading
    def execute(self, task):
        queue = Queue()
        for poc in task.pocs.all():
            queue.put_nowait(poc)
        for _ in range(task.threads):
            Worker(queue, task.tool).start()
        # queue.join()  # blocks until the queue is empty.


class Worker(Thread):
    def __init__(self, queue, tool, *args, **kwargs):
        self.queue = queue
        self.tool = tool
        super().__init__(*args, **kwargs)

    # ToDo: Some "smarter" error catching and thread monitoring?
    # ToDo: If POC alreadt exists, insert new POC
    # Get task (command) from queue and execute a shell command in a new thread
    def run(self):
        while True:
            try:
                poc = self.queue.get()
            except Empty:
                # ToDo: Complete task... (update database values)
                return
            poc_output = self.shell_execute(poc, self.tool)
            poc.poc = poc_output
            poc.hashpoc = 1
            poc.save()
            self.queue.task_done()

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

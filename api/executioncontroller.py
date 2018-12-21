from subprocess import run, PIPE, STDOUT
from threading import Thread, Lock
from queue import Queue, Empty


class Executioncontroller:

    # Execute parse command and handle threading
    def execute(self, tool, pocs, threads):
        queue = Queue()

        for poc in pocs:
            command = self.parse_command(tool.executionstring, poc.service.host.ip, poc.service.port)
            print(command)
            queue.put_nowait(command)
            # ToDo get value from thread (or put from worker)
        for _ in range(threads):
            Worker(queue, tool.timeout).start()
        # queue.join()  # blocks until the queue is empty.

    # Parse command string to include host and port parameters
    def parse_command(self, commandstring, host, port):
        command = commandstring
        if host:
            command = command.replace("<host>", host)
        if port:
            command = command.replace("<port>", str(port))
        return command


class Worker(Thread):
    def __init__(self, queue, timeout, *args, **kwargs):
        self.queue = queue
        self.timeout = timeout
        super().__init__(*args, **kwargs)

    # Get task (command) from queue and execute a shell command in a new thread
    def run(self):
        while True:
            try:
                command = self.queue.get(timeout=(self.timeout + 2))
            except Empty:
                return
            poc_output = self.shell_execute(command, self.timeout)
            self.queue.task_done()
            return poc_output

    # Execute command and return STDOUT and STDERR
    def shell_execute(self, command, timeout):
        try:
            tool_output = run(command, shell=True, check=True, timeout=timeout, stdout=PIPE, stderr=STDOUT)
            return tool_output.stdout
        except Exception as ex:
            print(ex)
            print("Command execution failed")

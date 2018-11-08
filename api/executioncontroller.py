from subprocess import run

class Executioncontroller:

    def execute(self, tool, pocs):
        for poc in pocs:
            print(tool)
            command = self.parse_command(tool.executionstring, poc.get('host'), poc.get('port'))
            print(command)
            try:
                run(command, shell=True, check=True, timeout=tool.timeout)
            except Exception as ex:
                print(ex)
                print("Command execution failed")


    def parse_command(self, commandstring, host, port):
        command = commandstring
        if host:
            command = command.replace("<host>", host)
        if port:
            command = command.replace("<port>", str(port))
        return command


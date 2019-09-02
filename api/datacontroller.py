from .parsers.nessus import *
from .models import *


# Handles data that is not directly handled by viewsets and Django models
class Datacontroller():

    # Import Nessus file into database
    def import_nessusfile(self, nessusfile):
        import_job = Import.objects.create(name=nessusfile, running=1)

        parser = NessusParser()
        reporthosts = parser.parse(nessusfile)

        for reporthost in reporthosts:  # Loop trough hosts
            host, host_created = Host.objects.get_or_create(ip=reporthost.ipv4, fqdn=reporthost.hostname, mac=reporthost.macaddr, os=reporthost.os)

            for reportitem in reporthost.reportitems:  # Loop trough reportitems
                # If finding does not yet exist, create new finding object
                finding, created_finding = Finding.objects.get_or_create(name=reportitem.pluginName, description=reportitem.description, pluginID=reportitem.pluginID)
                # If service does not yet exist, append as child to host
                service, service_created = Service.objects.get_or_create(name=reportitem.serviceName, port=reportitem.port, protocol=reportitem.protocol, host=host, finding=finding)
                # ToDo: Add imported (Nessus) PoC
                # If ProofOfConcept does not exist
                ProofOfConcept.objects.get_or_create(service=service, info="Nessus import", poc=reportitem.plugin_output, imported=1)

        import_job.running = 0
        import_job.completed = 1
        import_job.save()

        print("[+] Nessus findings succesfully imported to DB...")




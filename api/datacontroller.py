from .parsers.nessus import *
from .models import *
from django.core.management import call_command
from django.http import HttpResponse

import sys
import os


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
                service, service_created = Service.objects.get_or_create(name=reportitem.serviceName, port=reportitem.port, protocol=reportitem.protocol, host=host)
                # ToDo: Check case when Nessus has no PoC (relation finding <-> serivce trough PoC will not be made?)
                # If ProofOfConcept does not exist
                ProofOfConcept.objects.get_or_create(service=service, finding=finding, info="Nessus import", poc=reportitem.plugin_output, imported=1)

        import_job.running = 0
        import_job.completed = 1
        import_job.save()

        print("[+] Nessus findings succesfully imported to DB...")

    def save_project(self, filename):
        filename = filename + ".xml"
        response = HttpResponse(content_type='application/xml')
        response['Content-Disposition'] = 'attachment; filename=%s' % (filename)

        sysout = sys.stdout
        sys.stdout = response
        # Dump database, leave Django auth and tool settings intact.
        call_command('dumpdata', 'api', format="xml", exclude=["auth", "api.tool"])
        sys.stdout = sysout
        return response


    def load_project(self, filename):
        call_command('loaddata', filename, format="xml")
        os.remove(filename)

    def clear_project(self):
        ProofOfConcept.objects.all().delete()
        Finding.objects.all().delete()
        Task.objects.all().delete()
        Service.objects.all().delete()
        Host.objects.all().delete()
        Import.objects.all().delete()


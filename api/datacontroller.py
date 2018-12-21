from .parsers.nessus import *
from .models import *


# Handles data that is not directly handled by viewsets and Django models
class Datacontroller():

    def get_or_create(self, model, **kwargs):
        obj = None
        try:
            obj = model.objects.filter(**kwargs).first()
            if not obj:
                obj = model(**kwargs)
                obj.save()
        except Exception as ex:
            print(ex)
        finally:
            return obj

    def has_relation(self, finding, service):
        try:
            return ProofOfConcept.objects.get(finding=finding, service=service)
        except ProofOfConcept.DoesNotExist:
            return None

    # Import Nessus file into database
    def import_nessusfile(self, nessusfile):
        parser = NessusParser()
        reporthosts = parser.parse(nessusfile)

        for reporthost in reporthosts:  # Loop trough hosts
            host = self.get_or_create(Host, ip=reporthost.ipv4, fqdn=reporthost.hostname, mac=reporthost.macaddr, os=reporthost.os)
            host_services = host.services.all()

            for reportitem in reporthost.reportitems:  # Loop trough reportitems, append as child to host
                service = Service(name=reportitem.serviceName, port=reportitem.port, protocol=reportitem.protocol, host=host)
                # If the host has no services yet, add this new one
                if not host_services:
                    service.save()
                else:
                    # Check all services in host. If nessus file contains new services it gets added to the host
                    known_service = False
                    for host_service in host_services:
                        if service.name == host_service.name and service.port == str(host_service.port) and service.protocol == host_service.protocol:
                            known_service = True
                            service = host_service
                            break

                    if not known_service:
                        print("NEW SERVICE")
                        service.save()

                finding = self.get_or_create(Finding, name=reportitem.pluginName, description=reportitem.description, import_poc=reportitem.poc, pluginID=reportitem.pluginID)
                if not self.has_relation(finding, service):
                    ProofOfConcept.objects.create(finding=finding, service=service)
        print("[+] Nessus findings succesfully imported to DB...")




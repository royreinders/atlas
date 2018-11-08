import lxml.etree as et


class NessusParser():

    def parse_reporthost(self, xml_reporthost):
        services = []
        findings = []
        fqdn = ''

        name = xml_reporthost.attrib['name']
        ip = xml_reporthost.xpath("HostProperties/tag[@name='host-ip']/text()")[0] # ToDO: IP field is not always filled, use name as alternative
        if xml_reporthost.xpath("HostProperties/tag[@name='host-fqdn']/text()"):
            fqdn = xml_reporthost.xpath("HostProperties/tag[@name='host-fqdn']/text()")[0]
        if xml_reporthost.xpath("HostProperties/tag[@name='operating-system']/text()"):
            os = xml_reporthost.xpath("HostProperties/tag[@name='operating-system']/text()")[0]
        else:
            os = xml_reporthost.xpath("HostProperties/tag[@name='os']/text()")[0]

        # Loop trough reportitems for the host
        reportitems = xml_reporthost.xpath('ReportItem')
        for reportitem in reportitems:
            services.append(self.parse_reportitem(reportitem))

        host_object = ReportHost(name, ip, '', fqdn, '', os, services)

        return host_object

    def parse_reportitem(self, xml_reportitem):
        serviceName = xml_reportitem.attrib['svc_name']
        protocol = xml_reportitem.attrib['protocol']
        port = xml_reportitem.attrib['port']
        pluginName = xml_reportitem.attrib['pluginName']
        pluginID = xml_reportitem.attrib['pluginID']
        description = xml_reportitem.xpath('description/text()')[0]
        if xml_reportitem.xpath('plugin_output/text()'):
            poc = xml_reportitem.xpath('plugin_output/text()')[0]
        else:
            poc = ''
        reportitem = ReportItem(serviceName, protocol, port, pluginName, pluginID, description, poc)
        return reportitem


    def parse(self, nessusfile):
        nessusresults = []

        try:
            print("[+] Parsing Nessus file...")
            xml = et.parse(nessusfile)
            xml_root = xml.getroot()
            reporthosts = xml_root.xpath('Report/ReportHost')

            for reporthost in reporthosts:
                nessusresults.append(self.parse_reporthost(reporthost))

            return nessusresults
        except:
            print("\t[-] Parser error! Invalid nessus file!")
            raise


# The following classes are the classes defining the datastructure in which the Nessus data will be stored

class ReportHost:
    name = ''
    ipv4 = ''
    ipv6 = ''
    hostname = ''
    macaddr = ''
    os = ''
    reportitems = []

    def __init__(self, name, ipv4, ipv6, hostname, macaddr, os, reportitems):
        self.name = name
        self.ipv4 = ipv4
        self.ipv6 = ipv6
        self.hostname = hostname
        self.macaddr = macaddr
        self.os = os
        self.reportitems = reportitems


class ReportItem:
    serviceName = ''
    protocol = ''
    port = ''
    pluginName = ''
    pluginID = ''
    description = ''
    poc = ''

    def __init__(self, serviceName, protocol, port, pluginName, pluginId, description, poc):
        self.serviceName = serviceName
        self.protocol = protocol
        self.port = port
        self.pluginName = pluginName
        self.pluginID = pluginId
        self.description = description
        self.pocs = poc


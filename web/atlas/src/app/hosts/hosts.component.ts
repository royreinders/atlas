import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { ClrDatagridStringFilterInterface } from "@clr/angular";
import { ObjectUnsubscribedError } from 'rxjs';

export class IPFilter implements ClrDatagridStringFilterInterface<any> {
  accepts(host: any, search: string): boolean {
    return host.ip.toLowerCase().indexOf(search) >= 0;
  }
}

export class FQDNFilter implements ClrDatagridStringFilterInterface<any> {
  accepts(host: any, search: string): boolean {
    return host.fqdn.toLowerCase().indexOf(search) >= 0;
  }
}

export class OSFilter implements ClrDatagridStringFilterInterface<any> {
  accepts(host: any, search: string): boolean {
    return host.os.toLowerCase().indexOf(search) >= 0;
  }
}

export class PortFilter implements ClrDatagridStringFilterInterface<any> {
  accepts(service: any, search: string): boolean {
    return String(service.port).indexOf(search) >= 0;
  }
}

export class TypeFilter implements ClrDatagridStringFilterInterface<any> {
  accepts(service: any, search: string): boolean {
    return service.name.toLowerCase().indexOf(search) >= 0;
  }
}

export class ProtocolFilter implements ClrDatagridStringFilterInterface<any> {
  accepts(service: any, search: string): boolean {
    return service.protocol.toLowerCase().indexOf(search) >= 0;
  }
}

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})

export class HostsComponent implements OnInit {
  //hosts: Object;
  selected_host: any;
  hosts: Object;
  host_services: Object;
  service_pocs: any;
  selected = [];
  tools: Object;
  new_task: any;
  new_finding: any;
  selected_tool: any;
  task_threads: any = 0;
  viewPocModal = false
  selected_service: Object;
  poc_options: any;


  new_service: any;
  new_host: any;
  newHostIP: any;
  newHostFQDN: any;
  newHostMAC: any;
  newHostOS: any;
  newServiceName: any;
  newServicePort: any;
  newServiceProtocol: any;


  private ipFilter = new IPFilter();
  private fqdnFilter = new FQDNFilter();
  private osFilter = new OSFilter();
  private portFilter = new PortFilter();
  private typeFilter = new TypeFilter();
  private protocolFilter = new ProtocolFilter();


  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.getHosts()
  }

  getHosts() {
    this.data.getHosts().subscribe(data => this.hosts = data);
  }

  selectedHostChanged(selected_host) {
    if (selected_host) {
      this.selected_host = selected_host;
      this.getHostServices(selected_host.id)
    }
  }

  getHostServices(host_id) {
    this.data.GetHostServices(host_id).subscribe(data => this.host_services = data);
  }

  getServicePocs(service_id) {
    this.data.GetServicePocs(service_id, this.selected).subscribe(data => this.service_pocs = data);
  }

  replaceLineBreak(s: string) {
    return s.replace('\n', '<br />');
  }

  viewPocs(service) {
    this.selected_service = service
    this.viewPocModal = true
    this.getServicePocs(service.id)
  }

  copyToClipboard(val: string) {
    console.log(val)
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.getElementById("pocmodal").appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.getElementById("pocmodal").removeChild(selBox);
  }


  doPrint(value) {
    console.log(value.info)
  }


  addHost() {
    this.new_host = new Object()
    this.new_host.ip = this.newHostIP
    this.new_host.fqdn = this.newHostFQDN
    this.new_host.mac = this.newHostMAC
    this.new_host.os = this.newHostOS

    this.data.AddHost(this.new_host).subscribe(data => {
      this.getHosts();
    })
  }

  deleteHost(host) {
    this.data.DeleteHost(host).subscribe(data => {
      this.getHosts();
    })
  }

  editHost(host) {
    this.data.EditHost(host).subscribe(data => {
      this.getHosts();
    })
  }

  addService() {
    this.new_service = new Object();
    this.new_service.name = this.newServiceName
    this.new_service.port = this.newServicePort
    this.new_service.protocol = this.newServiceProtocol
    this.new_service.host = this.selected_host.id
    this.data.AddService(this.new_service).subscribe(data => {this.getHostServices(this.selected_host.id);})
  }

  deleteService(service) {
    this.data.DeleteService(service).subscribe(data => {
      this.getHostServices(this.selected_host.id);
    })
  }
}
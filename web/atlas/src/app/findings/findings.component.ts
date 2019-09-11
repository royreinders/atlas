import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { ClrDatagridStringFilterInterface } from "@clr/angular";
import { ObjectUnsubscribedError } from 'rxjs';

export class FindingFilter implements ClrDatagridStringFilterInterface<any> {
  accepts(finding: any, search: string): boolean {
    return finding.name.toLowerCase().indexOf(search) >= 0;
  }
}

export class IPFilter implements ClrDatagridStringFilterInterface<any> {
  accepts(service: any, search: string): boolean {
    return service.host.ip.toLowerCase().indexOf(search) >= 0;
  }
}

export class FQDNFilter implements ClrDatagridStringFilterInterface<any> {
  accepts(service: any, search: string): boolean {
    return service.host.fqdn.toLowerCase().indexOf(search) >= 0;
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

@Component({
  selector: 'app-findings',
  templateUrl: './findings.component.html',
  styleUrls: ['./findings.component.css']
})

export class FindingsComponent implements OnInit {
  //hosts: Object;
  selected_finding: any;
  findings: Object;
  finding_services: Object;
  service_pocs: any;
  selected = [];
  selected_services = [];
  tools: Object;
  new_task: any;
  new_finding: any;
  selected_tool: any;
  task_threads: any = 0;
  viewPocModal = false
  selected_service = Object;
  poc_options: any;

  private findingFilter = new FindingFilter();
  private ipFilter = new IPFilter();
  private fqdnFilter = new FQDNFilter();
  private portFilter = new PortFilter();
  private typeFilter = new TypeFilter();

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.getFindings()

    this.GetTools()
  }

  getFindings() {
    this.data.GetFindings().subscribe(data => this.findings = data);
  }

  selectedFindingChanged(selected_finding) {
    if (selected_finding) {
      this.selected_finding = selected_finding;
      this.getFindingServices(selected_finding.id)
    }
  }

  getFindingServices(finding_id) {
    this.data.GetFindingServices(finding_id).subscribe(data => this.finding_services = data);
  }

  getServicePocs(service_id, finding_id) {
    this.data.GetServicePocs(service_id, finding_id).subscribe(data => this.service_pocs = data);
  }

  setHasPoc(service) {
    if (service.haspoc == 0) {
      service.haspoc = 1
      this.data.EditService(service).subscribe(data => service = data)
    } else if (service.haspoc == 1) {
      service.haspoc = 0
      this.data.EditService(service).subscribe(data => service = data)
    }
  }

  setFalsePositive(service) {
    if (service.falsepositive == 0) {
      service.falsepositive = 1
      this.data.EditService(service).subscribe(data => service = data)
    } else if (service.falsepositive == 1) {
      service.falsepositive = 0
      this.data.EditService(service).subscribe(data => service = data)
    }
  }

  SetThreads(threads) {
    this.task_threads = threads
  }

  GetTools() {
    this.data.GetTools().subscribe(data => this.tools = data)
  }

  AddTask() {
    this.new_task = new Object()
    this.new_task.services = new Array()
    this.new_task.tool = this.selected_tool.id
    this.selected_services.forEach(poc => { this.new_task.services.push(poc.id) });
    this.new_task.finding = this.selected_finding.id
    this.new_task.threads = this.task_threads
    this.data.AddTask(this.new_task).subscribe()
  }

  replaceLineBreak(s: string) {
    return s.replace('\n', '<br />');
  }

  viewPocs(service) {
    this.selected_service = service
    this.viewPocModal = true
    this.getServicePocs(service.id, this.selected_finding.id)
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

  AddFinding(finding_name) {
    this.new_finding = new Object()
    this.new_finding.name = finding_name
    this.data.AddFinding(this.new_finding).subscribe()
    this.getFindings()
  }

  deleteFinding(finding) {
    this.data.DeleteFinding(finding).subscribe(data => {
      this.getFindings();
    })
  }

  editFinding(finding) {
    this.data.EditFinding(finding).subscribe(data => {
      this.getFindings();
    })
  }

  toggleFindingDone(finding) {
    if (finding.checked == 1) {
      finding.checked = 0;
    }
    else if (finding.checked == 0) {
      finding.checked = 1
    }
    this.data.EditFinding(finding).subscribe(data => {
      this.getFindings();
    })
  }
}
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ClrDatagridStringFilterInterface } from "@clr/angular";

export class FindingFilter implements ClrDatagridStringFilterInterface<any> {
  accepts(finding: any, search: string): boolean {
    return finding.name.toLowerCase().indexOf(search) >= 0;
  }
}

export class HostFilter implements ClrDatagridStringFilterInterface<any> {
  accepts(service: any, search: string): boolean {
    return service.service.host.toLowerCase().indexOf(search) >= 0;
  }
}

export class PortFilter implements ClrDatagridStringFilterInterface<any> {
  accepts(service: any, search: string): boolean {    
    return String(service.service.port).indexOf(search) >= 0;
  }
}

export class TypeFilter implements ClrDatagridStringFilterInterface<any> {
  accepts(service: any, search: string): boolean {    
    return service.service.name.toLowerCase().indexOf(search) >= 0;
  }
}

@Component({
  selector: 'app-pocs',
  templateUrl: './pocs.component.html',
  styleUrls: ['./pocs.component.css']
})
export class PocsComponent implements OnInit {

  selected_finding: any;
  findings: Object;
  finding_pocs: Object;
  selected = [];
  selected_pocs = [];
  private findingFilter = new FindingFilter();
  private hostFilter = new HostFilter();
  private portFilter = new PortFilter();
  private typeFilter = new TypeFilter();

  constructor(private data: DataService) {
  }

  ngOnInit() {
    //this.data.getHosts().subscribe(
    //  data => this.hosts = data
    //);
    this.data.GetFindings().subscribe(
      data => this.findings = data
    );
  }

  selectedFindingChanged(selected_finding) {
    this.selected_finding = selected_finding;
    this.getServicePocs(selected_finding.id)
  }

  getServicePocs(finding_id) {
    this.data.GetFindingServices(finding_id).subscribe(data => this.finding_pocs = data);
  }

  setHasPoc(service){
    if(service.haspoc == 0){
      service.haspoc = 1
      this.data.UpdateService(service).subscribe(data => service = data)
    } else if (service.haspoc == 1){
      service.haspoc = 0
      this.data.UpdateService(service).subscribe(data => service = data)
    }
  }

  setFalsePositive(service){
    if(service.falsepositive == 0){
      service.falsepositive = 1
      this.data.UpdateService(service).subscribe(data => service = data)
    } else if (service.falsepositive == 1){
      service.falsepositive = 0
      this.data.UpdateService(service).subscribe(data => service = data)
    }
  }
}
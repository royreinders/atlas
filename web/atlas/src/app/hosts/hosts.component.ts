import { Component, OnInit, ViewChild } from '@angular/core';
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
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})

export class HostsComponent implements OnInit {
  //hosts: Object;
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
    this.getFindingPocs(selected_finding.id)
  }

  getFindingPocs(finding_id) {
    this.data.GetFindingPocs(finding_id).subscribe(data => this.finding_pocs = data);
  }

  setHasPoc(poc){
    if(poc.haspoc == 0){
      poc.haspoc = 1
      this.data.UpdatePoc(poc).subscribe(data => poc = data)
    } else if (poc.haspoc == 1){
      poc.haspoc = 0
      this.data.UpdatePoc(poc).subscribe(data => poc = data)
    }
  }

  setFalsePositive(poc){
    if(poc.falsepositive == 0){
      poc.falsepositive = 1
      this.data.UpdatePoc(poc).subscribe(data => poc = data)
    } else if (poc.falsepositive == 1){
      poc.falsepositive = 0
      this.data.UpdatePoc(poc).subscribe(data => poc = data)
    }
  }
}
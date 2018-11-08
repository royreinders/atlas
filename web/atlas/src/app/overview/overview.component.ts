import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  hosts: Object;
  findings: Object;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getHosts().subscribe(
      data => this.hosts = data
    );
    this.data.GetFindings().subscribe(
      data => this.findings = data
    );
  }
}
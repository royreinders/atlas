import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})
export class HostsComponent implements OnInit {

  hosts: Object;
  private isCollapsed

  constructor(private data: DataService) { 
    this.isCollapsed = false;
  }

  ngOnInit() {
    this.data.getHosts().subscribe(
      data => this.hosts = data
    );
  }

}
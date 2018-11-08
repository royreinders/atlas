import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  hosts: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getHosts().subscribe(
    data => this.hosts = data
  ); 
}
  
}

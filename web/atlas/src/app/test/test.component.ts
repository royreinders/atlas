import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  findings : Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.GetFindings().subscribe(
      data => this.findings = data
    );
  }

  selected = [];
  networkSystems = [
    {name: 'System 1', serial_number: 'abc'},
    {name: 'System 2', serial_number: 'def'},
    {name: 'System 3', serial_number: 'ghi'},
  ]
}

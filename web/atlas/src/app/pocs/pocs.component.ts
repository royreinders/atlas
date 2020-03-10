import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pocs',
  templateUrl: './pocs.component.html',
  styleUrls: ['./pocs.component.css']
})
export class PocsComponent implements OnInit {

  constructor(private data: DataService) { }

  tasks: Object;
  selected_task: any;

  ngOnInit() {
    this.GetTasks()
  }

  GetTasks(){ 
    this.data.GetTasks().subscribe(data => this.tasks = data)
  }  
}

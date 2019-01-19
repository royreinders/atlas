import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  selected_task: any;
  tasks: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.GetTasks()
  }

  GetTasks(){ 
    this.data.GetTasks().subscribe(data => this.tasks = data)
    console.log(this.tasks)
  }
}

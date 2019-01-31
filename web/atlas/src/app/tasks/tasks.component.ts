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
  tool: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.GetTasks()
    this.GetTool(2)
  }

  GetTasks(){ 
    this.data.GetTasks().subscribe(data => this.tasks = data)
  }  

  GetTool(tool_id){
    var tool
    this.data.GetTool(tool_id).subscribe(data => this.tool = data);
    console.log(this.tool)
  }

  StartTask(task){
    this.data.StartTask(task.id).subscribe()
    task.running = 1
  }
}

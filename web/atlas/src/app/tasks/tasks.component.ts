import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {ClrDatagridSortOrder, ClrDatagridStringFilterInterface} from '@clr/angular';

export class ToolFilter implements ClrDatagridStringFilterInterface<any> {
  accepts(tool: any, search: string): boolean {
    return tool.name.toLowerCase().indexOf(search) >= 0;
  }
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  selected_task: any;
  tasks: Object;
  tool: Object;

  descSort = ClrDatagridSortOrder.ASC;

  private toolFilter = new ToolFilter()

  constructor(private data: DataService) { }

  ngOnInit() {
    this.GetTasks()
  }

  GetTasks(){ 
    this.data.GetTasks().subscribe(data => this.tasks = data)
  }  

  GetTool(tool_id){
    var tool
    this.data.GetTool(tool_id).subscribe(data => this.tool = data);
  }

  StartTask(task){
    this.data.StartTask(task.id).subscribe()
    task.running = 1
  }
}

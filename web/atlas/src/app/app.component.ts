import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ATLAS';
  runningtasks: any;
  interval: any

  constructor(private data: DataService) { }

  ngOnInit() {
    this.setRunningTasks()
  }

  setRunningTasks(){
    console.log(this.runningtasks)

    this.interval = setInterval(() => { 
      this.getRunningTasks(); 
  }, 5000);
  }

  getRunningTasks(){
    return this.data.GetRunningTasks().subscribe(data => this.runningtasks = data.length);
  }
}

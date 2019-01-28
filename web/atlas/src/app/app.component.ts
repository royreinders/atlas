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

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.GetRunningTasks().subscribe(data =>this.runningtasks = data)
    console.log(this.runningtasks)
  }
}

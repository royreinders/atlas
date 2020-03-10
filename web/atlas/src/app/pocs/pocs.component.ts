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
  task_services: any;
  selected_service: any;
  service_pocs: any;

  viewPocModal = false

  ngOnInit() {
    this.GetTasks()
  }

  selectedTaskChanged(selected_task){
    if(selected_task){
      this.selected_task = selected_task;
      this.getTaskServices(this.selected_task.id)
    }
  }

  getTaskServices(task_id) {
    this.data.GetTaskServices(task_id).subscribe(data => this.task_services = data.services)
  }

  GetTasks(){ 
    this.data.GetTasks().subscribe(data => this.tasks = data)
  }  

  getServicePocs(service_id) {
    this.data.GetServicePocs(service_id, this.selected_task.finding.id).subscribe(data => this.service_pocs = data);
  }

  replaceLineBreak(s: string) {
    return s.replace('\n', '<br />');
  }

  viewPocs(service) {
    this.selected_service = service
    this.viewPocModal = true
    this.getServicePocs(service.id)
  }

  copyToClipboard(val: string) {
    console.log(val)
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.getElementById("pocmodal").appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.getElementById("pocmodal").removeChild(selBox);
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  success: boolean;
  uploading: boolean;
  saved: boolean;
  progress: { percentage: number } = { percentage: 0 };

  imports: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.success = false;
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.uploading = true;
    this.success = false;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.data.UploadProject(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.success = true;
        this.currentFileUpload = null
      }
    });
 
    this.selectedFiles = undefined;
  }

  saveProject(filename){
    this.data.SaveProject(filename).subscribe(response => {
      const blob = new Blob([response], { type: 'application/xml' });
      console.log(response)
      const a = document.createElement('a');
      a.setAttribute('style', 'display:none;');
      document.body.appendChild(a);
      a.download = filename + ".atlas";
      a.href = URL.createObjectURL(blob);
      a.target = '_blank';
      a.click();
      document.body.removeChild(a);
    })
    this.saved = true
  }

}

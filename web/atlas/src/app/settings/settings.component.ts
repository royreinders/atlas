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
  uploaded: boolean;
  downloading: boolean;
  downloaded: boolean;
  cleared: boolean;
  fileselected: boolean;
  projectname: any;
  progress: { percentage: number } = { percentage: 0 };

  imports: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.uploaded = false;
    this.fileselected = false;
    this.downloading = false;
    this.downloaded = false;
    this.cleared = false;
  }

  selectFile(event) {
    this.fileselected = true;
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.fileselected = false;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.data.UploadProject(this.currentFileUpload).subscribe();
    this.uploaded = true;
  }

  saveProject(filename){
    this.downloading = true;
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
      this.downloading = false;
      this.downloaded = true;
      this.projectname = null;
    })
  }

  clearProject(){
    this.data.ClearProject().subscribe();
    this.cleared = true;
  }

}

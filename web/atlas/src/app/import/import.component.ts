import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  success: boolean;
  uploading: boolean;
  progress: { percentage: number } = { percentage: 0 };

  imports: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.success = false;
    this.GetImports();
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.uploading = true;
    this.success = false;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.data.UploadNessus(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.success = true;
        this.currentFileUpload = null
        this.GetImports();
        console.log(this.progress.percentage);
        console.log('File is completely uploaded!');
      }
    });
 
    this.selectedFiles = undefined;
  }

  GetImports(){ 
    this.data.GetImports().subscribe(data => this.imports = data) 
  }
  
  
}

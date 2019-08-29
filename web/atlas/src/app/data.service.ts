import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getHosts() {
    return this.http.get('http://127.0.0.1:8000/api/hosts/');
  }

  GetFindings() {
    return this.http.get('http://127.0.0.1:8000/api/findings/')
  }

  GetFindingServices(finding_id) {
    return this.http.get('http://127.0.0.1:8000/api/services/?finding=' + finding_id)
  }

  GetServicePocs(service_id) {
    return this.http.get('http://127.0.0.1:8000/api/pocs/?service=' + service_id)
  }

  UpdateService(service):Observable<any>{
    return this.http.put('http://127.0.0.1:8000/api/services/' + service.id + "/", service)
  }

  GetTools() {
    return this.http.get('http://localhost:8000/api/tools/')
  }

  GetTool(id){
    return this.http.get('http://localhost:8000/api/tools/' + id + "/")
  }

  AddTool(tool):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/tools/', tool)
  }

  DeleteTool(tool):Observable<any>{
    return this.http.delete('http://127.0.0.1:8000/api/tools/' + tool.id + "/")
  }

  EditTool(tool):Observable<any>{
    return this.http.put('http://127.0.0.1:8000/api/tools/' + tool.id + "/", tool)
  }

  Execute(commandstring):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post('http://127.0.0.1:8000/api/execute/', commandstring, httpOptions)
  }

  GetTasks():Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/tasks/')
  }

  GetRunningTasks():Observable<any>{
    return this.http.get('http://localhost:8000/api/tasks/?running=1')
  }

  AddTask(task):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(task)
    return this.http.post('http://127.0.0.1:8000/api/tasks/', task, httpOptions)
  }

  StartTask(task_id):Observable<any>{
    console.log("Started task " + task_id)
    return this.http.get('http://127.0.0.1:8000/api/tasks/' + task_id + "/start/")
  }

  UploadNessus(file): Observable<HttpEvent<{}>> {

    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', 'http://127.0.0.1:8000/api/importnessus/', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

}


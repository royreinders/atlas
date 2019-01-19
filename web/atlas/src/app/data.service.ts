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

  GetFindingPocs(finding_id) {
    return this.http.get('http://127.0.0.1:8000/api/pocs/?finding=' + finding_id)
  }

  UpdatePoc(poc):Observable<any>{
    return this.http.put('http://127.0.0.1:8000/api/pocs/' + poc.id + "/", poc)
  }

  GetTools() {
    return this.http.get('http://localhost:8000/api/tools/')
  }

  GetTool(id) {
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

  AddTask(task):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/tasks/', task)
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


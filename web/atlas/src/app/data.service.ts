import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  // Trailing slash is necessary!
  private backend_url = 'http://127.0.0.1:8000/'

  
  // Hosts

  getHosts() {
    return this.http.get(this.backend_url + 'api/hosts/');
  }

  DeleteHost(host):Observable<any>{
    return this.http.delete(this.backend_url + 'api/hosts/' + host.id + "/")
  }

  AddHost(host):Observable<any>{
    return this.http.post(this.backend_url + 'api/hosts/', host)
  }
  
  EditHost(host):Observable<any>{
    return this.http.put(this.backend_url + 'api/hosts/' + host.id + "/", host)
  }


  //Findings

  GetFindings() {
    return this.http.get(this.backend_url + 'api/findings/')
  }

  DeleteFinding(finding):Observable<any>{
    return this.http.delete(this.backend_url + 'api/findings/' + finding.id + "/")
  }

  AddFinding(finding):Observable<any>{
    return this.http.post(this.backend_url + 'api/findings/', finding)
  }
  
  EditFinding(finding):Observable<any>{
    return this.http.put(this.backend_url + 'api/findings/' + finding.id + "/", finding)
  }


  // Services

  GetFindingServices(finding_id) {
    return this.http.get(this.backend_url + 'api/servicehosts/?findings=' + finding_id)
  }

  GetHostServices(host_id) {
    return this.http.get(this.backend_url + 'api/services/?host=' + host_id)
  }

  DeleteService(service):Observable<any>{
    return this.http.delete(this.backend_url + 'api/services/' + service.id + "/")
  }

  AddService(service):Observable<any>{
    return this.http.post(this.backend_url + 'api/services/', service)
  }
  
  EditService(service):Observable<any>{
    return this.http.put(this.backend_url + 'api/services/' + service.id + "/", service)
  }

  GetServicePocs(service_id, finding_id) {
    return this.http.get(this.backend_url + 'api/pocs/?service=' + service_id + "&" + "finding=" + finding_id)
  }

  
  // Imports

  GetImports() {
    return this.http.get(this.backend_url + 'api/imports/')
  }

  AddImport(import_obj):Observable<any>{
    return this.http.post(this.backend_url + 'api/import/', import_obj)
  }

  UploadNessus(file): Observable<HttpEvent<{}>> {

    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', this.backend_url + 'api/importnessus/', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }


  //Tools

  GetTools() {
    return this.http.get(this.backend_url + 'api/tools/')
  }

  GetTool(id){
    return this.http.get(this.backend_url + 'api/tools/' + id + "/")
  }

  AddTool(tool):Observable<any>{
    return this.http.post(this.backend_url + 'api/tools/', tool)
  }

  DeleteTool(tool):Observable<any>{
    return this.http.delete(this.backend_url + 'api/tools/' + tool.id + "/")
  }

  EditTool(tool):Observable<any>{
    return this.http.put(this.backend_url + 'api/tools/' + tool.id + "/", tool)
  }

  Execute(commandstring):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.backend_url + 'api/execute/', commandstring, httpOptions)
  }


  //Tasks

  GetTasks():Observable<any>{
    return this.http.get(this.backend_url + 'api/tasks/')
  }

  GetRunningTasks():Observable<any>{
    return this.http.get(this.backend_url + 'api/tasks/?running=1')
  }

  AddTask(task):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(task)
    return this.http.post(this.backend_url + 'api/tasks/', task, httpOptions)
  }

  StartTask(task_id):Observable<any>{
    return this.http.get(this.backend_url + 'api/tasks/' + task_id + "/start/")
  }


  // Settings

  UploadProject(file): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', this.backend_url + 'api/settings/load/', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  SaveProject(filename):Observable<any>{
    return this.http.get(this.backend_url + 'api/settings/save/?filename=' + filename, {responseType: 'blob'})
  }

  ClearProject():Observable<any>{
    return this.http.get(this.backend_url + 'api/settings/clear/')
  }

}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getOverview() {
    return this.http.get('http://127.0.0.1:8000/api/hostsbrief/'); 
  }

  getHosts() {
    return this.http.get('http://127.0.0.1:8000/api/hosts/'); 
  }

}


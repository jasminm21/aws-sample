import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService{

  constructor(private http:HttpClient) { 

  }

  baseUrl="https://jsonplaceholder.typicode.com/users";
  getData(): Observable<any> {
     return this.http.get(this.baseUrl);
  }
}

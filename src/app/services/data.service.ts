import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from "../interfaces/data";

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private apiUrl = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }

  //Using Raw data to For data Injection
  getData() {
    return ['data 1', 'data 2', 'data 3'];
  }

  // Using Api data For data Injection
  getPosts(): Observable<Data[]> {
    return this.http.get<Data[]>(this.apiUrl);
  }
}
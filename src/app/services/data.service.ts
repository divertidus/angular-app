import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getPost() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}

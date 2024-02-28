import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiddlemanService {

  url: string = "http://localhost:4200/api/users"
  constructor(private http: HttpClient) { }

  checkIfUserExists() : Observable<Object> {
    return this.http.get(this.url)
  }
}

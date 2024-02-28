import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Communicates with the API

@Injectable({
  providedIn: 'root'
})
export class MiddlemanService {

  port = 7074
  apiUrl: string = `https://localhost:${this.port}/api/`
  constructor(private http: HttpClient) { }

  checkIfUserExists(username:string,password:string) : Observable<Object> {
    return this.http.post(this.apiUrl + "login",{
        username: username,
        password: password
    })
  }

  addUser(username:string,email:string,password:string) {
    console.log("creating a new user with email: " + email)
  }

  deleteUser(username:string) {
     console.log("deleting user with username: " + username)
  }
}

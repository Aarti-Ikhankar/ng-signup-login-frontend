import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:3002/"

  constructor(private http: HttpClient) { }


  signup(user) {
    return this.http.post(this.url + 'user/signup', user);
  }

  login(user){
    return this.http.post(this.url + 'user/login', user);
  }
  
  deleteRecord(id, collectionName) {
    return this.http.delete(this.url + 'record/delete/' + id + '/' + collectionName);
  }


}



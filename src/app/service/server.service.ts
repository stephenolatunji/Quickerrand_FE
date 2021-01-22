import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ServerService {



  constructor(public http: HttpClient, private auth: AngularFireAuth) { }

  verifyEmail(email) {
    return this.http.get<any>(`${environment.url}?email=${email}`);
  }

  newUser(data) {
    return this.http.post<any>(`${environment.url}`, JSON.stringify(data));
  }

  login(data) {
    return this.http.post<any>(`${environment.url_login}`, JSON.stringify(data));
  }

  checkEmailExistence(email) {
      return this.auth.fetchSignInMethodsForEmail(email).then(data => {
        if(data.length == 0) {
          return false
        }
        else {
          return true
        }
      })
  }
}

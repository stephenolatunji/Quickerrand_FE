import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  public store;

  constructor(public http: HttpClient) { }

  verifyEmail(email) {
    return this.http.get<any>(`${environment.url}?email=${email}`);
  }

  newUser(data) {
    return this.http.post<any>(`${environment.url}`, JSON.stringify(data));
  }

  login(data) {
    return this.http.post<any>(`${environment.url_login}`, JSON.stringify(data));
  }

  userData(data) {
    this.store = data[0];    
    return this.store;
  }
}

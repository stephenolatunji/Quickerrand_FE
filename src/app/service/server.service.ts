import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  userData; 

 constructor(public http: HttpClient, private auth: AngularFireAuth, private firestore: AngularFirestore) { }

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

  storeUserData(data) {console.log(data)
    return this.userData = data;
  }

  storeErrandToDb(errandDetails) {
    let allErrands;
    let existingErrandDetail = this.userData.errands;
    console.log(this.userData)
    if(existingErrandDetail == undefined) {
      allErrands = [errandDetails] 
    }
    else {
      existingErrandDetail.unshift(errandDetails);
      allErrands = existingErrandDetail
    }
  
    this.storeUserData(allErrands);

    return this.firestore.collection('Users').doc(this.userData.email)
      .set({errands: allErrands }, {merge: true})
      .then(()=>{}).catch((err)=>{console.log(err)});
    

    //  // update the datatbase 
    //  this.firestore.collection('Users').doc(this.userData.email)
    //  .set(errandDetails, {merge: true})
    //  .then(()=>{}).catch((err)=>{console.log(err)});
  }

}

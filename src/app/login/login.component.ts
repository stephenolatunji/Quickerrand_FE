import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ServerService } from '../service/server.service';
import firebase from 'firebase/app';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginErr: boolean = false; loading: boolean = false; lat

  user = {
    email: '',
    password: '',
  };
  
  type: string = 'password';
  constructor(
    private rout: Router,
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private app: AppComponent,
    private server: ServerService
    ) { }

  ngOnInit(): void {
  }

  toggleType() {
    this.type = document.getElementById("password").getAttribute("type") == 'password' ? 'text' : 'password';
    document.getElementById("password").setAttribute("type", this.type);
  }

  submit(email, password) {
    this.loading = true;
    this.user.email = email; this.user.password = password;
    this.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
    .then(() => {
      this.loading = false;
      this.firestore.collection('Users', ref => ref.where('email', '==', this.user.email)).valueChanges()
      .subscribe(data => {
        if(data.length > 0) {
          this.server.storeUserData(data[0]);
          this.rout.navigate(['user'])
        }
        else {
          this.loginErr = true
        }
      });
    })
    .catch(()=> { this.loading = false; this.loginErr = true });
  }

  signInWithGoogle(): void {
      var provider = new firebase.auth.GoogleAuthProvider();
      this.auth.signInWithPopup(provider).then((result: any) => {
        
        this.firestore.collection('Users', ref => ref.where('email', '==', result.additionalUserInfo.profile.email)).valueChanges()
        .subscribe(data => {
          this.server.storeUserData(data[0]);
          this.rout.navigate(['user'])
        });
       
      }).catch(error => {
        return error
        // ...
      });
    
  }

}

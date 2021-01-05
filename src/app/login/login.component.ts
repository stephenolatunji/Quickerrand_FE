import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ServerService } from '../service/server.service';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginErr: boolean = false;

  user = {
    email: '',
    password: '',
  };
  
  type: string = 'password';
  constructor(
    private rout: Router,
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private server: ServerService
    ) { }

  ngOnInit(): void {
  }

  toggleType() {
    this.type = document.getElementById("password").getAttribute("type") == 'password' ? 'text' : 'password';
    document.getElementById("password").setAttribute("type", this.type);
  }

  submit(email, password) {

    this.user.email = email; this.user.password = password;
    
    this.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
    .then(() => {
      this.firestore.collection('Users', ref => ref.where('email', '==', this.user.email)).valueChanges()
      .subscribe(data => {
        this.server.userData(data);
        localStorage.setItem('user', this.user.email);
        this.rout.navigate(['user']);
      });
    })
    .catch(()=> this.loginErr = true);
  }

  signInWithGoogle(): void {
      var provider = new firebase.auth.GoogleAuthProvider();
      this.auth.signInWithPopup(provider).then((result: any) => {
        
        this.firestore.collection('Users', ref => ref.where('email', '==', result.additionalUserInfo.profile.email)).valueChanges()
        .subscribe(data => {
          this.server.userData(data);
          console.log(this.server.store)
          setTimeout(() => {
            this.rout.navigate(['user'])            
          }, 1000);
        });
       
      }).catch(error => {
        return error
        // ...
      });
    
  }

}

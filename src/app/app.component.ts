import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ServerService } from './service/server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private rout: Router,
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private server: ServerService
  ) { }

  ngOnInit(): void {
    this.auth.authState.subscribe(data=>{
      (data!==null)? this.getData() : null
    })
  }

  getData() {
    this.firestore.collection('Users', ref => ref.where('email', '==', localStorage.getItem('user'))).valueChanges()
    .subscribe(data => {
      localStorage.setItem('data', JSON.stringify(data[0]));
    });

    this.getMyLocation();
  }

  getMyLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition( (position) => {
        const cordinate = {
          lat : position.coords.latitude.toString(),
          long :  position.coords.longitude.toString()
        }
          
        this.firestore.collection('Users').doc(localStorage.getItem('user'))
        .set(cordinate, {merge: true})
      });
    }
  }


}

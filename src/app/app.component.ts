import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFireAuth } from '@angular/fire/auth';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat;
  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private geolocation: Geolocation,
    private statusBar: StatusBar
  ) { }

  ngOnInit(): void {

    this.auth.authState.subscribe(data=>{
      (data!==null)? localStorage.getItem('data') == null ? this.getData() : null : null
    })

  }

  getData() {
    this.firestore.collection('Users', ref => ref.where('email', '==', localStorage.getItem('user'))).valueChanges()
    .subscribe(data => {
      localStorage.setItem('data', JSON.stringify(data[0]));
    });

  }

  getMyLocation() {
    this.geolocation.getCurrentPosition({ timeout: 30000 })
    .then((resp) => {
      const cordinate = {
        lat: resp.coords.latitude.toString(),
        long :  resp.coords.longitude.toString()
      };
      this.firestore.collection('Users').doc(localStorage.getItem('user'))
      .set(cordinate, {merge: true})
    })
  }


}

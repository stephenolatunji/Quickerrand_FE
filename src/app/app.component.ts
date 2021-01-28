import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFireAuth } from '@angular/fire/auth';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ServerService } from './service/server.service';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { AccountComponent } from './account/account.component';
import { ErrandRequestComponent } from './make-errrand-folder/errand-request/errand-request.component';

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
    private service: ServerService,
    private home: HomeScreenComponent,
    private account: AccountComponent
  ) { }

  ngOnInit(): void {
    this.auth.authState.subscribe(data=>{
      (data!==null)? this.getData(data.email) : null
    })

  }

  getData(email) {
    this.firestore.collection('Users', ref => ref.where('email', '==', email)).valueChanges()
    .subscribe(data => {
        this.service.storeUserData(data[0]);  
        this.home.ngOnInit();
        this.account.ngOnInit();
    });
  }

  getMyLocation() {
    this.geolocation.getCurrentPosition({ timeout: 30000 })
    .then((resp) => {
      const cordinate = {
        lat: resp.coords.latitude.toString(),
        long :  resp.coords.longitude.toString()
      };
      this.firestore.collection('Users').doc(this.service.userData)
      .set(cordinate, {merge: true})
    })
  }


}

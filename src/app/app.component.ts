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
    this.getData();
  }

  getData() {
    this.firestore.collection('Users', ref => ref.where('email', '==', localStorage.getItem('user'))).valueChanges()
    .subscribe(data => {
      this.server.userData(data);
    });
  }


}

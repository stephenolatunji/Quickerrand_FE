import { ServerService } from './../../service/server.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intrested-erranders',
  templateUrl: './intrested-erranders.component.html',
  styleUrls: ['./intrested-erranders.component.css']
})
export class IntrestedErrandersComponent implements OnInit {
  errandee = false;;
  constructor(private firestore: AngularFirestore, private server: ServerService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.dataRefetchHandler();
    }, 15000);
  }

  dataRefetchHandler() {
    this.firestore.collection('Users', ref => ref.where('email', '==', this.server.userData.email)).valueChanges()
      .subscribe(data => {   
        console.log (data)
          this.server.storeUserData(data[0]);
      })
  }

}

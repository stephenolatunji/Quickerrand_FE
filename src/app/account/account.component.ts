import { Component, OnInit } from '@angular/core';
import { ServerService } from '../service/server.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  data;
  constructor(
    private server: ServerService,
    private auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('data'));
    console.log(this.data)
  }

  logout() {
    this.auth.signOut();
    localStorage.clear();
    window.location.reload()
  }

}

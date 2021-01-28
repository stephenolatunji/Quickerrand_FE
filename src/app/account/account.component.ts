import { Component, Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { ServerService } from '../service/server.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
@Injectable({
  providedIn: "root"
})
export class AccountComponent implements OnInit {

  data; loader: boolean = false; rout: string = 'account';

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private footer: FooterComponent,
    private server: ServerService
  ) { }

  ngOnInit(): void {
    this.server.userData == undefined ? this.getData() : this.data = this.server.userData;
  }

  getData() {
    this.loader = true;
    setTimeout(() => {   
      this.loader = false;
      this.data = this.server.userData;
    }, 1000);
  }

  logout() {
    this.loader = true;
    this.auth.signOut().then(() => {
      this.loader = false;
      // localStorage.setItem("data", null);
      // localStorage.setItem("user", null);
      localStorage.setItem("rout", 'user');
      this.footer.pathChecker('user');
      this.router.navigate(['login'])      
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  data; loader: boolean = false; rout: string = 'account';

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private footer: FooterComponent
  ) { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('data'));
  }

  logout() {
    this.loader = true;
    this.auth.signOut().then(() => {
      this.loader = false;
      localStorage.setItem("data", null);
      localStorage.setItem("user", null);
      localStorage.setItem("rout", 'user');
      this.footer.pathChecker('user');
      this.router.navigate(['login'])      
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public color;
  constructor(private route: Router) { }

  ngOnInit(): void {
    // check rout path
    this.pathChecker();
  }

  navigator(x) {  
    this.route.navigate([x]);
  }

  public pathChecker() {
    const path = window.location.pathname;
    if(path == '/errands' || path == '/active-errands' || path == '/errand-requested-by-me' || path == '/errand-run-by-me') {
      this.color = {
        home: 'home-grey',
        errand: 'errand',
        account: 'user-grey',
        notification: 'notification-grey'
      }
    }
    else if(path == '/user') {
      this.color = {
        home: 'home',
        errand: 'errand-grey',
        account: 'user-grey',
        notification: 'notification-grey'
      }
    }
    else if(path == '/account') {
      this.color = {
        home: 'home-grey',
        errand: 'errand-grey',
        account: 'user',
        notification: 'notification-grey'
      }
    }
    else if(path == '/notification') {
      this.color = {
        home: 'home-grey',
        errand: 'errand-grey',
        account: 'user-grey',
        notification: 'notification'
      }
    }
  }

}

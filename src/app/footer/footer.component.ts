import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
@Injectable({
  providedIn: "root"
})
export class FooterComponent implements OnInit {

  @Input() rout; color; 

  public identity = {
    home: false, account: false, notification: false, errands: false
  }
  constructor(private route: Router) { }
  
  ngOnInit(): void {   
    this.pathChecker(this.rout);
  }

  navigator(x) {  
    this.route.navigate([x]);
  }

  public pathChecker(rout) {
    
    if(rout == 'errands') {
      this.identity = {
        home: false, account: false, notification: false, errands: true
      }
    }
    else if(rout == 'user') {
      this.identity = {
        home: true, account: false, notification: false, errands: false
      }
    }
    else if(rout == 'account') {
      this.identity = {
        home: false, account: true, notification: false, errands: false
      }
    }
    else if(rout == 'notification') {
      this.identity = {
        home: false, account: false, notification: true, errands: false
      }
    }
    else {
      this.identity = {
        home: true, account: false, notification: false, errands: false
      }
    }
  }

}

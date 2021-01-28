import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../service/server.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
@Injectable({
  providedIn: "root"
})
export class HomeScreenComponent implements OnInit {
  public userData; rout: string = 'user'; loader:  boolean;
  constructor(
    private route: Router, 
    private server: ServerService
    ) { }

  ngOnInit(): void {
    this.server.userData == undefined ? this.getData() : this.userData = this.server.userData;
  }

  getData() {
    this.loader = true;
    setTimeout(() => {   
      this.loader = false;
      this.userData = this.server.userData;
    }, 1000);
  }

  makeErrand() {
    this.route.navigate(['errand-request'])
  }

}

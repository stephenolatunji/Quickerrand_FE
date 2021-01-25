import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../service/server.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {
  public userData; rout: string = 'user';
  constructor(
    private route: Router
    ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.userData = JSON.parse(localStorage.getItem('data'));
  }

  makeErrand() {
    this.route.navigate(['errand-request'])
  }

}

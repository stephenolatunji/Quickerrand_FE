import { Component, OnInit } from '@angular/core';
import { ServerService } from '../service/server.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  data;
  constructor(
    private server: ServerService
  ) { }

  ngOnInit(): void {
    this.data = this.server.store;
    console.log(this.data)
  }

}

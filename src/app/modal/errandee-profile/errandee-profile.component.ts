import { Component, OnInit, Injectable } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-errandee-profile',
  templateUrl: './errandee-profile.component.html',
  styleUrls: ['./errandee-profile.component.css']
})

@Injectable({
  providedIn: "root"
})

export class ErrandeeProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.hide()
  }

  show() {
    $('#profile').modal('show');
  }

  hide() {
    $('#profile').modal('hide');
  }
}

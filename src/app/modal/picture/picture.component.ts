import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.hide();
  }

  show() {
    $('#profile').modal('show');
  }

  hide() {
    $('#profile').modal('hide');
  }

}

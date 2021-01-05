import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

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

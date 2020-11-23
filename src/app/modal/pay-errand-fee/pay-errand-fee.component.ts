import { Component, Injectable, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-pay-errand-fee',
  templateUrl: './pay-errand-fee.component.html',
  styleUrls: ['./pay-errand-fee.component.css']
})

@Injectable({
  providedIn: "root"
})

export class PayErrandFeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.hide()
  }

  show() {
    $('#notify').modal('show');
  }

  hide() {
    $('#notify').modal('hide');
  }
}

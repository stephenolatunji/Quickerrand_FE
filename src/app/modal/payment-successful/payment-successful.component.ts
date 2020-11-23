import { Component, Injectable, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-payment-successful',
  templateUrl: './payment-successful.component.html',
  styleUrls: ['./payment-successful.component.css']
})
@Injectable({
  providedIn: "root"
})
export class PaymentSuccessfulComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.hide()
  }

  show() {
    $('#paymentSuccess').modal('show');
  }

  hide() {
    $('#paymentSuccess').modal('hide');
  }

}

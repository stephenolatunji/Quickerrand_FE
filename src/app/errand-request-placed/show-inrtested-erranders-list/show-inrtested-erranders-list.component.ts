import { Component, Injectable, OnInit } from '@angular/core';
import { ErrandeeProfileComponent } from 'src/app/modal/errandee-profile/errandee-profile.component';
import { PayErrandFeeComponent } from '../../modal/pay-errand-fee/pay-errand-fee.component';
import { PaymentSuccessfulComponent } from '../../modal/payment-successful/payment-successful.component';
declare var $: any;

@Component({
  selector: 'app-show-inrtested-erranders-list',
  templateUrl: './show-inrtested-erranders-list.component.html',
  styleUrls: ['./show-inrtested-erranders-list.component.css']
})

export class ShowInrtestedErrandersListComponent implements OnInit {
  errandee = [1, 2, 3, 4, 5, 6, 8, 9];

  constructor(
    private payErrandFeeModal: PayErrandFeeComponent,
    private paymentSuccessfulModal: PaymentSuccessfulComponent,
    private errandProfileModal: ErrandeeProfileComponent,
  ) { }

  ngOnInit(): void {
    // this.payErrandFeeModal.show();
    // this.paymentSuccessfulModal.show();
    this.errandProfileModal.show();
  }
}

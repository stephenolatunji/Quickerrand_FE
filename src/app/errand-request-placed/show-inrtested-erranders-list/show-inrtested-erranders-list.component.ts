import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ErrandeeProfileComponent } from 'src/app/modal/errandee-profile/errandee-profile.component';
import { PayErrandFeeComponent } from '../../modal/pay-errand-fee/pay-errand-fee.component';
import { PaymentSuccessfulComponent } from '../../modal/payment-successful/payment-successful.component';
import { HelperService } from 'src/app/service/helper.service';

declare var $: any;

@Component({
  selector: 'app-show-inrtested-erranders-list',
  templateUrl: './show-inrtested-erranders-list.component.html',
  styleUrls: ['./show-inrtested-erranders-list.component.css']
})

export class ShowInrtestedErrandersListComponent implements OnInit {
  @Input() errandee; errandDetails;

  constructor(
    private helper: HelperService,
    private payErrandFeeModal: PayErrandFeeComponent,
    private paymentSuccessfulModal: PaymentSuccessfulComponent,
    private errandProfileModal: ErrandeeProfileComponent,
  ) { }

  ngOnInit(): void {
    this.errandDetails = this.helper.errandDetails;
    if (this.errandDetails == undefined) {
      //window.history.back();
    }
    // this.payErrandFeeModal.show();
    // this.paymentSuccessfulModal.show();
    //this.errandProfileModal.show();
  }
}

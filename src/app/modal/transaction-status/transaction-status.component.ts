import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-transaction-status',
  templateUrl: './transaction-status.component.html',
  styleUrls: ['./transaction-status.component.css']
})
export class TransactionStatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.show()
  }

  show() {
    $('#status').modal('show');
  }

  hide() {
    $('#status').modal('hide');
  }
}
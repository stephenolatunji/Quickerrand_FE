import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-transaction-date',
  templateUrl: './transaction-date.component.html',
  styleUrls: ['./transaction-date.component.css']
})
export class TransactionDateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.show()
  }

  show() {
    $('#date').modal('show');
  }

  hide() {
    $('#date').modal('hide');
  }
}

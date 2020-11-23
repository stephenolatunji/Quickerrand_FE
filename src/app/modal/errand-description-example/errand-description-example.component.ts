import { Component, OnInit, Injectable, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-errand-description-example',
  templateUrl: './errand-description-example.component.html',
  styleUrls: ['./errand-description-example.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class ErrandDescriptionExampleComponent implements OnInit {

  @Input() notification_msg;

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

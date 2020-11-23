import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  panelOpenState = false; 
  public mark = {
    one: true,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false
  }
  constructor() { }

  ngOnInit(): void {
  }



}

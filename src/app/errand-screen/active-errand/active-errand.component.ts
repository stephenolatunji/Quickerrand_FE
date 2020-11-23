import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-active-errand',
  templateUrl: './active-errand.component.html',
  styleUrls: ['./active-errand.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ActiveErrandComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  backFunc() {
    window.history.back()
  }

}

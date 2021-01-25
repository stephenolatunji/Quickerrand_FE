import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errand-details',
  templateUrl: './errand-details.component.html',
  styleUrls: ['./errand-details.component.css']
})
export class ErrandDetailsComponent implements OnInit {
  rout: string = 'errands';
  constructor() { }

  ngOnInit(): void {
  }

  backFunc() {
    window.history.back()
  }

}

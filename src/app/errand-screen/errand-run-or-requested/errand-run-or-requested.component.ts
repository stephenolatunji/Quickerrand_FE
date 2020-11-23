import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errand-run-or-requested',
  templateUrl: './errand-run-or-requested.component.html',
  styleUrls: ['./errand-run-or-requested.component.css']
})
export class ErrandRunOrRequestedComponent implements OnInit {
  errandType
  constructor() { }

  ngOnInit(): void {  
    this.errandType =  window.location.pathname == '/errand-run-by-me' ? 
    'Errands run by me' : 'Requested Errands'
  }

  backFunc() {
    window.history.back()
  }

}

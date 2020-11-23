import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-run-by-me',
  templateUrl: './run-by-me.component.html',
  styleUrls: ['./run-by-me.component.css']
})
export class RunByMeComponent implements OnInit {

  constructor(private rout: Router) { }

  ngOnInit(): void {
  }

  errandDetails(x) {
    this.rout.navigate([`errand-details/${x}`])
  }

}

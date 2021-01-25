import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-errand-index',
  templateUrl: './errand-index.component.html',
  styleUrls: ['./errand-index.component.css']
})
export class ErrandIndexComponent implements OnInit {
  rout: string = 'errands';
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  routMe(x) {
    this.route.navigate([x])
  }

}

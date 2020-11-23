import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.show()
  }

  show() {
    $('#profile').modal('show');
  }

  hide() {
    $('#profile').modal('hide');
  }

  routMe(x) {
    this.hide();
    this.route.navigate([x])
  }
}

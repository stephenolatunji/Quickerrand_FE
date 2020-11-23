import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-unboarding-index',
  templateUrl: './unboarding-index.component.html',
  styleUrls: ['./unboarding-index.component.css']
})
@Injectable({
  providedIn: "root"
})

export class UnboardingIndexComponent implements OnInit {
  public unboard = {
    one: true, two: false, three: false, coming_from: 'previous'
  }
  constructor() { }

  ngOnInit(): void {
  }


}

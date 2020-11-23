import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnboardingIndexComponent } from "../unboarding-index/unboarding-index.component";

@Component({
  selector: 'app-unboarding-stage-one',
  templateUrl: './unboarding-stage-one.component.html',
  styleUrls: ['./unboarding-stage-one.component.css']
})
export class UnboardingStageOneComponent implements OnInit {
  animationAngle: string;

  constructor(private route: Router, public indexFunc: UnboardingIndexComponent) { }

  ngOnInit(): void {
    this.animationAngle = this.indexFunc.unboard.coming_from == 'previous'? 'animate__backInRight' : 'animate__backInLeft'
  }
  
  skip() {
    this.route.navigate(['signup'])
  }
  
  toggleUnboardingPage() {
    this.indexFunc.unboard = {
      one: false, two: true, three: false, coming_from: 'previous'
    }
  }

  myDecision(x) {
    this.indexFunc.unboard = {
      one: false, two: x==2?true:false, three: x==3?true:false, coming_from: 'previous'
    }
  }

}

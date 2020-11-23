import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnboardingIndexComponent } from '../unboarding-index/unboarding-index.component';

@Component({
  selector: 'app-unboarding-stage-three',
  templateUrl: './unboarding-stage-three.component.html',
  styleUrls: ['./unboarding-stage-three.component.css']
})
export class UnboardingStageThreeComponent implements OnInit {
  
  animationAngle: string;

  constructor(private route: Router, public indexFunc: UnboardingIndexComponent) { }

  ngOnInit(): void {
    this.animationAngle = this.indexFunc.unboard.coming_from == 'previous'? 'animate__backInRight' : 'animate__backInLeft'
  }

  start() {
    this.route.navigate(['signup'])
  }

  myDecision(x) {
    this.indexFunc.unboard = {
      one: x==1?true:false, two:x==2?true: false, three: false, coming_from: 'next'
    }
  }

}

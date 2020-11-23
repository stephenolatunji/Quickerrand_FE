import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnboardingIndexComponent } from '../unboarding-index/unboarding-index.component';

@Component({
  selector: 'app-unboarding-stage-two',
  templateUrl: './unboarding-stage-two.component.html',
  styleUrls: ['./unboarding-stage-two.component.css']
})
export class UnboardingStageTwoComponent implements OnInit {

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
      one: false, two: false, three: true, coming_from: 'previous'
    }
  }

  myDecision(x) {
    this.indexFunc.unboard = {
      one: x==1?true:false, two: false, three: x==3?true:false, coming_from: x==1?'next':'previous'
    }
  }

}

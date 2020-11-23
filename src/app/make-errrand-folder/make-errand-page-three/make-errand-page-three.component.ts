import { Component, OnInit } from '@angular/core';
import { IndexComponent } from "../index/index.component";
import { HelperService } from 'src/app/service/helper.service';

@Component({
  selector: 'app-make-errand-page-three',
  templateUrl: './make-errand-page-three.component.html',
  styleUrls: ['./make-errand-page-three.component.css']
})
export class MakeErrandPageThreeComponent implements OnInit {
  
  estimate_cost;

  constructor(private helper: HelperService, private indexFunc: IndexComponent) { }

  ngOnInit(): void {
    this.estimate_cost = this.helper.errandDetails.estimate_cost;
  }

  back(): void {
    const markData = { one: false, two: false, three: true, four: false, five: false, six: false };
    this.indexFunc.mark = markData;
  }

  continue(): void {
    //saving of progress
    const errandDetails = this.helper.errandDetails;
    let setErrandDetails = { 
      addressInfo: errandDetails?.addressInfo, 
      require_purchase: errandDetails?.require_purchase,
      estimate_cost: this.estimate_cost, 
      items: errandDetails?.items,
      additional_info: errandDetails?.additional_info
    };
    this.helper.saveErrandDetail(setErrandDetails);
    // do routing
    const markData = { one: false, two: false, three: false, four: false, five: true, six: false };
    this.indexFunc.mark = markData;
  }

}

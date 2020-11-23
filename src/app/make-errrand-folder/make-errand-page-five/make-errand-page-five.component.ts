import { Component, OnInit } from '@angular/core';
import { ErrandDescriptionExampleComponent } from "../../modal/errand-description-example/errand-description-example.component";
import { IndexComponent } from "../index/index.component";
import { HelperService } from 'src/app/service/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-errand-page-five',
  templateUrl: './make-errand-page-five.component.html',
  styleUrls: ['./make-errand-page-five.component.css']
})
export class MakeErrandPageFiveComponent implements OnInit {
  
  additional_info;
  public msg = {
    success: false,
    msg: null
  };

  constructor(
    private errandDescExam: ErrandDescriptionExampleComponent,
    private helper: HelperService, 
    private indexFunc: IndexComponent,
    private rout: Router
  ) { }

  ngOnInit(): void {  
  }

  continue(): void {
    //saving of progress
    const errandDetails = this.helper.errandDetails;
    let setErrandDetails = { 
      addressInfo: errandDetails?.addressInfo, 
      require_purchase: errandDetails?.require_purchase,
      estimate_cost: errandDetails?.estimate_cost,  
      items: errandDetails?.items,
      additional_info: this.additional_info
    };
    this.helper.saveErrandDetail(setErrandDetails);
    // do routing
    this.rout.navigate(['errand-description-summary'])
  }

  seeAnExample(): void {
    this.msg = {
      success: true,
      msg: "I urgently need someone to pick up a parcel for me at Olowu street in Iyana Ipaja. I will compensate the person for a quick delivery."
    };

    this.errandDescExam.show();
  }

  back(): void {
    const markData = { one: false, two: false, three: false, four: false, five: true, six: false };
    this.indexFunc.mark = markData;
  }

}

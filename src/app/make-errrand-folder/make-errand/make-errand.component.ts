import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/service/helper.service';
import { IndexComponent } from "../index/index.component";

@Component({
  selector: 'app-make-errand',
  templateUrl: './make-errand.component.html',
  styleUrls: ['./make-errand.component.css']
})
export class MakeErrandComponent implements OnInit {

  constructor(private helper: HelperService, private indexFunc: IndexComponent) { }

  ngOnInit(): void {
  }

  continue(val): void {
     //saving of progress
     const errandDetails = this.helper.errandDetails;
     let setErrandDetails = { 
       addressInfo: errandDetails?.addressInfo, 
       require_purchase: val,
       estimate_cost: errandDetails?.estimate_cost,   
       items: errandDetails?.items,
       additional_info: errandDetails?.additional_info
     };
     this.helper.saveErrandDetail(setErrandDetails);
     // do routing
      const markData = { one: false, two: false, three: false, four: true, five: false, six: false };
      this.indexFunc.mark = markData;
  }

  back(): void {
    const markData = { one: false, two: true, three: false, four: false, five: false, six: false };
    this.indexFunc.mark = markData;
  }

}

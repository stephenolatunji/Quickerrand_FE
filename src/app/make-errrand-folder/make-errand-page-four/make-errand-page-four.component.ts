import { Component, OnInit } from '@angular/core';
import { IndexComponent } from "../index/index.component";
import { HelperService } from 'src/app/service/helper.service';

@Component({
  selector: 'app-make-errand-page-four',
  templateUrl: './make-errand-page-four.component.html',
  styleUrls: ['./make-errand-page-four.component.css']
})
export class MakeErrandPageFourComponent implements OnInit {

  list = [1, 2]; disabled: boolean = true;
  public items = {
    item: [],
    item_additional_info: null
  }

  constructor(private helper: HelperService, private indexFunc: IndexComponent) { }

  ngOnInit(): void {
  }

  addMore(): void {
    this.list.push(this.list.length+1);
  }

  recordItem(event): void {
    // check if one of the two default fields is nt empty
    this.items.item[event.target.id] = event.target.value;
    (this.items.item[0] == undefined || this.items.item[0] == '') ?
    this.disabled = true : this.disabled = false;
  }

  continue(): void {
     //saving of progress
     const errandDetails = this.helper.errandDetails;
     let setErrandDetails = { 
      addressInfo: errandDetails?.addressInfo, 
       require_purchase: errandDetails?.require_purchase,
       estimate_cost: errandDetails?.estimate_cost,  
       items: this.items,
       additional_info: errandDetails?.additional_info
     };
     this.helper.saveErrandDetail(setErrandDetails);
     // do routing
     const markData = { one: false, two: false, three: false, four: false, five: false, six: true };
     this.indexFunc.mark = markData;
  }

  back(): void {
    const markData = { one: false, two: false, three: false, four: true, five: false, six: false };
    this.indexFunc.mark = markData;
  }

}

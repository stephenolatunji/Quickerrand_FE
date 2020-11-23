import { Component, OnInit } from '@angular/core';
import { HelperService } from "../../service/helper.service";
import { IndexComponent } from "../index/index.component";

@Component({
  selector: 'app-errand-request',
  templateUrl: './errand-request.component.html',
  styleUrls: ['./errand-request.component.css']
})

export class ErrandRequestComponent implements OnInit {
  panelOpenState = false; searchBox; suggestion = [];
  loader: boolean = false; locationSet: boolean = false;
  errandDetails; locality: string; region: string;

  constructor(
    private helper: HelperService,
    private indexFunc: IndexComponent
  ) { }

  ngOnInit(): void {
    this.searchBox = this.helper.errandDetails?.address;
  }

  autoComplete() {
    this.loader = true;
    this.helper.autoComplete(this.searchBox).subscribe(dat =>
      this.reArrange(dat)
    )
  }

  private reArrange(data): void {
    this.loader = false;
    // this.suggestion = [];
    data.map((dat, i) => {
      let singleData = dat.place_name.split(",");
      const locality = singleData[0];
      singleData.shift();
      const region = singleData.toString();  
      this.suggestion[i] = { locality, region, coord: dat.center  };
    })
  }

  setLocation(data): void {
    this.searchBox = data.locality + ' ' + data.region;
    this.locality = data.locality;
    this.region = data.region;
    // to ascertain that ve setr location so as to knw when to activate the continue button
    this.locationSet = true;
    this.helper.saveCordinate(data.coord);
  }
  
  handleContinue(): void {
    //saving of progress
    const errandDetails = this.helper.errandDetails;
    let setErrandDetails = { 
      addressInfo: { address: this.searchBox, locality: this.locality, region: this.region, coord: this.helper.cordinate}, 
      require_purchase: errandDetails?.require_purchase,
      errandDetails: errandDetails?.errandDetails,
      items: errandDetails?.items,
      additional_info: errandDetails?.additional_info
    };
    this.helper.saveErrandDetail(setErrandDetails);
    // do routing
    const markData = { one: false, two: true, three: false, four: false, five: false, six: false };
    this.indexFunc.mark = markData;
  }

  backFunc(): void {
    window.history.back();
  }
}

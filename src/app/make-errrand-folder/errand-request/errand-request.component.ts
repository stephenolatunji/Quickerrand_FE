import { Component, OnInit } from '@angular/core';
import { HelperService } from "../../service/helper.service";
import { ServerService } from "../../service/server.service";
import { IndexComponent } from "../index/index.component"
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-errand-request',
  templateUrl: './errand-request.component.html',
  styleUrls: ['./errand-request.component.css']
})

export class ErrandRequestComponent implements OnInit {
  panelOpenState = false; searchBox; suggestion = [];
  loader: boolean = false; locationSet: boolean = false;
  errandDetails; locality: string; region: string; showPopOver: boolean = false;
  addressHistory = []; previousIndex = 0; savedAddress = [];

  constructor(
    private helper: HelperService,
    private indexFunc: IndexComponent,
    private geolocation: Geolocation,
    private server: ServerService,
    private rout: Router
  ) { }

  ngOnInit(): void {
    this.searchBox = this.helper.errandDetails?.address;
    this.getData();
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
    this.helper.saveAddressToHistory(setErrandDetails.addressInfo, {removalOperation: false})
      this.helper.saveErrandDetail(setErrandDetails);
      // do routing
      const markData = { one: false, two: true, three: false, four: false, five: false, six: false };
      this.indexFunc.mark = markData;
  }

  backFunc(): void {
    this.rout.navigate(['user']);
  }

  handleSaveAddress(address) {
    this.helper.saveAddress(address, { removalOperation: false })
    this.savedAddress.unshift(address);
    //  // remove multiple address occurence
    this.savedAddress = this.savedAddress.filter((v,i,a)=>a.findIndex(t=>(t?.address === v?.address))===i);
  }

  handleDeleteHistory(i) {
    this.helper.saveAddressToHistory(null, {removalOperation: true, index: i})
    this.addressHistory.splice(i, 1);
  }

  handleDeleteSavedAddress(i) {
    this.helper.saveAddress(null, {removalOperation: true, index: i})
    this.savedAddress.splice(i, 1);
  }

  useCurrentLocation(): void {
    this.loader = true;
    this.geolocation.getCurrentPosition().then(resp => {
      this.helper.currentLocation(resp.coords.latitude, resp.coords.longitude).subscribe((data: any) => {
        this.searchBox = data[0].place_name;
        this.locationSet = true;
        this.helper.saveCordinate([resp.coords.longitude, resp.coords.latitude]);
        this.loader = false;
       })
    }).catch(err=>{console.log(err);
      this.loader = false;
      this.searchBox = "Cannot find Location"
    });
     

  }

  clearPopOver(x) {
    if(this.addressHistory[x]!==undefined) {
      this.addressHistory[x].status = false;
    }
  }

  handlePopover(x) {
    // am using timeout to delay clearing thats done frm clickin class 'whole' 
    // class 'whole' is used to celar the popover when outisde of the popover
    // delay is used to first execute d clear then do d below
    setTimeout(() => {
      this.addressHistory[this.previousIndex].status = false;
      this.previousIndex = x;
      this.addressHistory[x].status = !this.addressHistory[x].status;  
    }, 100);
  }

  handleUseHistory(x, index) {
    this.clearPopOver(index);
    this.locationSet = true;
    this.helper.saveCordinate([x.coord[0], x.coord[1]]);
    this.searchBox = x.address;
  }

  handleUseSavedAddress(x) {
    this.locationSet = true;
    this.helper.saveCordinate([x.coord[0], x.coord[1]]);
    this.searchBox = x.address;
  }

  getData() {
    const data = this.server.userData;
    // history
    this.addressHistory = data?.history !=undefined ? data?.history : [];
    for (let index = 0; index < this.addressHistory.length; index++) {
      this.addressHistory[index].status = false;
    }
    // end history

    // savedAddress
    this.savedAddress = data?.saved_address != undefined? data?.saved_address : [];
    for (let index = 0; index < this.savedAddress.length; index++) {
      this.savedAddress[index].status = false;
    }
  }
}

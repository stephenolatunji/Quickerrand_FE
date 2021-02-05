import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/service/helper.service';
import { ServerService } from '../service/server.service';

@Component({
  selector: 'app-errand-desc-summary',
  templateUrl: './errand-desc-summary.component.html',
  styleUrls: ['./errand-desc-summary.component.css']
})
export class ErrandDescSummaryComponent implements OnInit {
  errandDetails
  constructor(private helper: HelperService, private rout: Router, private server: ServerService) { }

  ngOnInit(): void {
    this.errandDetails = this.helper.errandDetails; console.log(this.errandDetails)
    if(this.errandDetails == undefined) {
      window.history.back(); 
    }
    if(this.errandDetails.addressInfo.region == undefined) {
      const x = this.errandDetails.addressInfo.address.split(',');
      this.errandDetails.addressInfo.region = x[x.length-1]
    }

  }

  back() {
    this.rout.navigate(['errand-request'])
  }

  submit() {
    this.errandDetails.action = 'pending';
    this.server.storeErrandToDb(this.errandDetails);
    this.rout.navigate(['errand-request-placement'])
  }

}

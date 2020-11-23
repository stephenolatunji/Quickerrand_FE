import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { HelperService } from 'src/app/service/helper.service';
import { environment } from "../../../environments/environment";
import { IndexComponent } from "../index/index.component";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: mapboxgl.Map;

  constructor(
    private helper: HelperService,
    private indexFunc: IndexComponent
  ) { }

  ngOnInit(): void {
    this.initializeMap()
  }

  private initializeMap(): void {     
    // ds must be comin frm local storage
    const lat = parseFloat(this.helper.cordinate[0]);
    const long = parseFloat(this.helper.cordinate[1]);

    mapboxgl.accessToken = environment.map_token;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [lat, long],
      zoom: 10.5 // starting zoom
    });
  }

  continue(): void {
    const markData = { one: false, two: false, three: true, four: false, five: false, six: false };
    this.indexFunc.mark = markData;
  }

  back(): void {
    const markData = { one: true, two: false, three: false, four: false, five: false, six: false };
    this.indexFunc.mark = markData;
  }
}

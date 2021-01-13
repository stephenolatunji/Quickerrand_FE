import { AngularFirestore } from '@angular/fire/firestore';
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
    private indexFunc: IndexComponent,
    private firestore: AngularFirestore  ) { }

  ngOnInit(): void {
    this.initializeMap();
  }

  private initializeMap(): void {    
    // ds must be comin frm local storage
    const long= parseFloat(this.helper.cordinate[0]);
    const lat = parseFloat(this.helper.cordinate[1]);

    mapboxgl.accessToken = environment.map_token;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [long, lat-0.05],
      zoom: 10.5 // starting zoom
    });

    this.markersHandler();
  }


  private markersHandler() {
    this.firestore.collection('Users').get()
    .subscribe( (querySnapshot) => {
      querySnapshot.forEach((doc: any) => {
        (doc.data().email==localStorage.getItem('user'))? 
          null : this.showMarkers([doc.data().long, doc.data().lat], doc.data().image == null ? 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' : doc.data().image)  
      })
    })
  }

  private showMarkers(cord, avatar) {
    var el = document.createElement('img');
    el.srcset = avatar;
    el.setAttribute('width', '30px');
    el.style.borderRadius = '50% 50% 0 50%';
    el.style.display = 'inline-block';
    el.style.transform = 'rotate(-45deg)';
    el.style.border = '7px solid #62526D'

    new mapboxgl.Marker(el)
      .setLngLat(cord)
      .addTo(this.map);
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

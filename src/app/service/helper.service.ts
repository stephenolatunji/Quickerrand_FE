import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
import { AngularFirestore } from '@angular/fire/firestore';

export interface MapboxOutput {
  features: [];
};

@Injectable({
  providedIn: 'root'
})


export class HelperService {

  cordinate; errandDetails; buttomNavClickData: string = localStorage.getItem('rout');
  
  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore
  ) { }

  autoComplete(query: string) {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    return this.http.get(url + query + '.json?limit=5&country=ng&access_token=' + environment.map_token)
    .pipe(map((res: MapboxOutput) => {
      return res.features;
    }))
  }

  currentLocation(lat, long) {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    return this.http.get(url + long +',' + lat + '.json?country=ng&access_token=' + environment.map_token)
    .pipe(map((res: MapboxOutput) => {
      return res.features;
    }))
  }

  public saveCordinate(data) {
    this.cordinate = data;
    return this.cordinate;
  }

  public saveErrandDetail(data) {
    this.errandDetails = data;
  }
  
  public saveBottomNavClickRout(data) {
    localStorage.setItem('rout', data);
    this.buttomNavClickData = data;
  }

  public saveAddressToHistory(addressInfo) {
    delete addressInfo.locality; delete addressInfo.region;
    addressInfo.type = "history";
    this.firestore.collection('Address').doc(localStorage.getItem('user')).set(addressInfo)
    .then(()=>{}).catch((err)=>{console.log(err)});
  }

}
// 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
import { AngularFirestore } from '@angular/fire/firestore';
import { ServerService } from "./server.service";

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
    private firestore: AngularFirestore,
    private server: ServerService
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

  public saveAddressToHistory(incomingHistory, type) {
    // get data from local
    let data = this.server.userData;
    let savedHistory = data.history !==undefined ? data.history : [];
    // delete the prop u re nt using from incoming
    delete incomingHistory?.locality; delete incomingHistory?.region;
    !type.removalOperation ? savedHistory.unshift(incomingHistory) : savedHistory.splice(type.index, 1); 
    // remove multiple address occurence
    savedHistory = savedHistory.filter((v,i,a)=>a.findIndex(t=>(t?.address === v?.address))===i);
    console.log(savedHistory) 
    data.history = savedHistory;
    // set the storage with d new updated history data
    this.server.storeUserData(data);
    // update the datatbase aswell
    this.firestore.collection('Users').doc(data.email)
    .set({history: savedHistory}, {merge: true})
    .then(()=>{}).catch((err)=>{console.log(err)});
  }

  public saveAddress(address, type) {
     // get data from local
     let data = this.server.userData;
     let savedAddress = data.saved_address !==undefined ? data.saved_address : [];
    //  delete the prop u re nt using from incoming address
     delete address?.status;
     !type.removalOperation ? savedAddress.unshift(address) : savedAddress.splice(type.index, 1); 
    //  // remove multiple address occurence
     savedAddress = savedAddress.filter((v,i,a)=>a.findIndex(t=>(t?.address === v?.address))===i);
     data.saved_address = savedAddress;
     // set the storage with d new updated history data
    this.server.storeUserData(data);
    //  // update the datatbase aswell
    this.firestore.collection('Users').doc(data.email)
     .set({saved_address: savedAddress}, {merge: true})
     .then(()=>{}).catch((err)=>{console.log(err)});
  }



}
// 
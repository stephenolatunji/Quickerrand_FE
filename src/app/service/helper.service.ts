import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";

export interface MapboxOutput {
  features: [];
};

@Injectable({
  providedIn: 'root'
})


export class HelperService {

  cordinate; errandDetails;
  
  constructor(
    private http: HttpClient
  ) { }

  autoComplete(query: string) {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    return this.http.get(url + query + '.json?limit=5&country=ng&access_token=' + environment.map_token)
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
}
// 
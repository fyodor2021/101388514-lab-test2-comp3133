import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http" 
import { Observable } from 'rxjs';
import { error } from 'console';
@Injectable({
  providedIn: 'root'
})
export class RestAPICallService {

  constructor(private httpClient:HttpClient) {}
  getMissions():Observable<any>{
    return this.httpClient.get("https://api.spacexdata.com/v3/launches")
  }
  getMissionsByYear(year:number):Observable<any>{
    return this.httpClient.get("https://api.spacexdata.com/v3/launches?launch_year=" + year)
  }
  getMissionByFlightNumber(filghtNumber:number):Observable<any>{
    return this.httpClient.get("https://api.spacexdata.com/v3/launches/" + filghtNumber)
  }
}

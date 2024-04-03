import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RestAPICallService} from '../shared/rest-apicall.service'
import {MissionlistComponent} from '../missionlist/missionlist.component'
import { MissiondetailsComponent } from '../missiondetails/missiondetails.component';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MissionlistComponent,MissionfilterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  public missionData: any
  missionYears: any[] = [];
  filteredList: any[] = [];  
  constructor(private restAPICallService:RestAPICallService){
    this.restAPICallService.getMissions().subscribe(response => {
      this.missionData = response;
    });
  }

  handleFilterClick = (year:number) => {
    this.restAPICallService.getMissionsByYear(year).subscribe(response => {
     this.missionData = response
   })

 }

}

import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RestAPICallService} from './shared/rest-apicall.service'
import {MissionlistComponent} from './missionlist/missionlist.component'
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import {MissionModel} from './model/MissionModel'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MissionlistComponent,MissiondetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public missionData: any
  missionModelDataList: any;
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
 mapToMissionModel(entry:any): MissionModel{
  return new MissionModel(entry.links.mission_patch_small
    ,entry.mission_name,
    entry.launch_year,
    entry.details)
 }
}

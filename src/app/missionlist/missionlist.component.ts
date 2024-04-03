import { Component, Input, OnInit, OnChanges } from '@angular/core';
import {MissionfilterComponent } from '../missionfilter/missionfilter.component'
import { RestAPICallService } from '../shared/rest-apicall.service';
import {  ChangeDetectorRef,  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'missionlist',
  standalone: true,
  imports: [MissionfilterComponent],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})
export class MissionlistComponent{
  @Input() data: any;
  @Input() handleFilterClick:any;

  filteredMissions:any
  constructor(private restAPICallService:RestAPICallService, private router: Router){}
  handleDetailsDisplay(flightNumber: number){
    this.restAPICallService.getMissionByFlightNumber(flightNumber).subscribe(response => {
      console.log(response)
    this.router.navigate(['details'],{state:response})
      
    })
  } 
}

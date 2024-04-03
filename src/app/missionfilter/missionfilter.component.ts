import { Component,Input,Output } from '@angular/core';
import { RestAPICallService } from '../shared/rest-apicall.service';
@Component({
  selector: 'missionfilter',
  standalone: true,
  imports: [],
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.css'
})
export class MissionfilterComponent {
  missionYears = [2006, 2007,2008,2009,2010
  ,2012,2013,2014,2015,2016,2017,2018,2019,2020]
  @Input() handleFilterClick:any;
  filteredMissions: any[]  = []
  constructor(private restAPICallService:RestAPICallService){}

}

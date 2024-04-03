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
  @Input() missionYears:any;
  @Input() handleFilterClick:any;
  filteredMissions: any[]  = []
  constructor(private restAPICallService:RestAPICallService){}

}

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
export class HomeComponent implements OnInit{
  public missionData: any
  missionYears: any[] = [];
  filteredList: any[] = [];  
  ngOnInit(): void {
    if (this.missionData) {
      this.missionData.map((entry:any,index:number) => {
        this.missionYears.push(entry.launch_year)
      })
      this.filteredList = this.missionYears.filter((year:number,index:number, self:any) => {
        return self.indexOf(year) === index
      })
    }
  }
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

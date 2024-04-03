import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [],
  templateUrl: './missiondetails.component.html',
  styleUrl: './missiondetails.component.css'
})
export class MissiondetailsComponent {
  payload:any
  constructor(private router:Router){
    this.payload = this.router.getCurrentNavigation()?.extras.state;
  }
  


}

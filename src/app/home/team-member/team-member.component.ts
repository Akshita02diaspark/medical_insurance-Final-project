import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent implements OnInit {

  constructor( private routes: Router) { }

  ngOnInit() {
     if(localStorage.getItem('userToken')){
      this.routes.navigate(['user/dashboard']);
     }
  }

}

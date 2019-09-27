import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/home/data.service';
import { AuthService } from 'src/app/home/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-view-agent',
  templateUrl: './view-agent.component.html',
  styleUrls: ['./view-agent.component.css']
})
export class ViewAgentComponent implements OnInit {

  constructor( private dataService: DataService, private _authService: AuthService) { }

  myData={};

  policy = [];
  policyName;
  firstname;
  lastname;
  title;
  phone;
  email;


  ngOnInit() {
    this._authService.getAproovedUser()
    .subscribe(
      (res:any)=> {
        this.myData = res
        // console.log(this.myData['0']);
        this.firstname = this.myData['0'].firstname;
        this.lastname = this.myData['0'].lastname;
        this.title = this.myData['0'].title;
        this.email = this.myData['0'].email;
        this.policy = this.myData['0'].policy;
        this.policyName = this.policy['policyName'];
      },
      // err=> console.log('error',err)
    )
  }


}

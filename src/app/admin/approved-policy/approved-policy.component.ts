import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { DataService } from 'src/app/home/data.service';

@Component({
  selector: 'app-approved-policy',
  templateUrl: './approved-policy.component.html',
  styleUrls: ['./approved-policy.component.css']
})
export class ApprovedPolicyComponent implements OnInit {

  id;
  myData = {}

  claim ={ "claim": "Approved"}
  constructor( private adminService: AdminServiceService, private dataService: DataService) {
   }

  


  
  ngOnInit() {

    this.adminService.getClaimedUsers()
    .subscribe(
      (res:any)=> this.myData = res
      // err => console.log("error",err)
    )

    
  }

  sendApproval(_id: string){
    this.adminService.approveClaim(_id, this.claim)
    .subscribe(
      // res => console.log(res),
      // err => console.log(err)
    )
  }}
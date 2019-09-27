import { Component, OnInit } from '@angular/core';
import { AgentserviceService } from '../agentservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private _agentService: AgentserviceService, private routes: Router, private activateRouter: ActivatedRoute) { }
  myData:any;
  policy = [];
  nominie = [];
  location = [];
  nominieName;
  nominieRealtion;
  nominieNumber;
  policyAmount;
  policyName;
  premium;
  address;
  city;
  adhar;
  pan;
  state;
  ngOnInit() {
    this.activateRouter.params.subscribe(data => {
      this._agentService.view_User(data.id)
        .subscribe(
          (res: any) => {
          this.myData = res
            this.policy = this.myData['policy'];
            this.policyAmount = this.policy['policyAmount'];
            this.policyName = this.policy['policyName'];
            this.premium = this.policy['premium'];
            this.nominie = this.myData['nominie'];
            this.pan = this.myData['pan'];
            this.adhar = this.myData['adhar'];
            this.nominieName = this.nominie['nominieName'];
            this.nominieNumber = this.nominie['nominieNumber'];
            this.nominieRealtion = this.nominie['nominieRealtion'];
            this.location = this.myData['location'];
            this.address = this.location['address'];
            this.state = this.location['state'];
            this.city = this.location['city'];
          },
          // error => console.error(error)
        );
    });



  }

  backToDash() {

    this.routes.navigate(['agent/customer-list']);
  }

}

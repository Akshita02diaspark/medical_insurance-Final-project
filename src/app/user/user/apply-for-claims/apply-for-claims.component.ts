import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/home/data.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/home/auth.service';

@Component({
  selector: 'app-apply-for-claims',
  templateUrl: './apply-for-claims.component.html',
  styleUrls: ['./apply-for-claims.component.css']
})
export class ApplyForClaimsComponent implements OnInit {

  messages: any[] = [];
  subscription: Subscription;
  myData;
  policy = [];
  policyName;
  policyPremium;
  policyAmount;
  id;
  claim = { "claim": "requested" };
  condition = false;

  constructor(private dataService: DataService, private _authService: AuthService) {

    this.dataService.sendMessage(localStorage.getItem('userdata'));
    this.subscription = this.dataService.getMessage().subscribe(message => {
      if (message) {
        this.myData = JSON.parse(message.text)
        this.messages.push(message);
        this.policy = this.myData['policy'];
        this.policyName = this.policy['policyName'];
        this.policyAmount = this.policy['policyAmount'];
        this.id = this.myData['_id'];
        this.policyPremium = this.policy['premium'];
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    })

  }

  ngOnInit() {
  }

  applyClick() {
    this._authService.applyClaim(this.id, this.claim)
      .subscribe(
        res => {
          this.condition = true;
          // alert("Approved")
        }
      )
  }
}

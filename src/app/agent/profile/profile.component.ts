import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/home/auth.service';
import { AgentserviceService } from 'src/app/admin/agentservice.service';
import { DataService } from 'src/app/home/data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  messages: any[] = [];
  subscription: Subscription;
  myData = {}
  first_name;
  last_name;
  email;
  phone;

  constructor(private _agentService: AgentserviceService, private dataService: DataService) {

    this.dataService.sendMessage(localStorage.getItem('agentName'));
    this.subscription = this.dataService.getMessage().subscribe(message => {
      if (message) {
        this.myData = JSON.parse(message.text)
        this.messages.push(message);
        this.email = this.myData['email'];
        this.first_name = this.myData['first_name'];
        this.last_name = this.myData['last_name'];
        this.phone = this.myData['phone'];
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });
  }


  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

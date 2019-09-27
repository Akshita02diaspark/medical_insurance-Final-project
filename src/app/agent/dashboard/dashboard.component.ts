import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/home/data.service';
import { Subscription } from 'rxjs';
import { AgentserviceService } from '../agentservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  messages: any[] = [];
  subscription: Subscription;
  myData = {}
  first_name;

  constructor(private routes: Router, private _agentService: AgentserviceService, private dataService: DataService) {

    this.subscription = this.dataService.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
        this.first_name = message.text.first_name;
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

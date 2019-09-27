import { Component, OnInit } from '@angular/core';
import{AuthService} from '../auth.service'
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  messages: any[] = [];
  subscription: Subscription;
  myData ={ }
   first_name: String;


  constructor(public _authService : AuthService, private dataService: DataService) {
    this.dataService.sendMessage(localStorage.getItem('agentName'));
    this.subscription = this.dataService.getMessage().subscribe(message => {
      if (message) {
        this.myData=JSON.parse(message.text)
        this.messages.push(message);

       
        this.first_name =this.myData['first_name'];

      } else {
      // clear messages when empty message received
      this.messages = [];
      }
      });


   }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

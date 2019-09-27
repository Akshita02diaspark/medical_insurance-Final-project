import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/home/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  messages: any[] = [];
  subscription: Subscription;

  myData;
  location=[];
  adhaar;
  email;
  firstname;
  lastname;
  address;
  state;
  city;
  country;
  pin;
  phone;
  title;

  constructor( private dataService: DataService, private routes: Router) { 

    this.dataService.sendMessage(localStorage.getItem('userdata'));

    this.subscription = this.dataService.getMessage().subscribe(message => {
      if (message) {
        this.myData=JSON.parse(message.text)
      this.messages.push(message);
      
      this.firstname = this.myData['firstname'];
      this.lastname = this.myData['lastname'];
      this.email = this.myData['email'];
      this.adhaar = this.myData['adhar'];
      this.phone = this.myData['phone'];
      this.title = this.myData['title'];
      this.location = this.myData['location'];
      this.address = this.location['address'];
      this.state = this.location['state'];
      this.city = this.location['city'];
      this.pin = this.location['pin'];
      this.country = this.myData['country'];

      // this.nominie = message.text.nominie;
      // this.policy = message.text.policy;
      // this.relation = message.text.relation;
      



      } else {
      // clear messages when empty message received
      this.messages = [];
      }
      });
  }

  ngOnInit() {
  }

  backToDash(){
    this.routes.navigate(['user/customer-list']);
  }
  updateProfile(){
    
    this.routes.navigate(['user/user-update']);
  }

}

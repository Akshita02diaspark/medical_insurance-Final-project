import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder, Validators, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import {UserServiceService} from './user-service.service';
import {AuthService } from '../auth.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  login: FormGroup;
  userdetail;
  userEmail;
  userID;
firstname;
lastname;
phone;
  
  constructor(private formBuilder: FormBuilder, private routes: Router, private _authService: AuthService, private dataService: DataService) { 
}

  
  sendMessage(): void {
  // send message to subscribers via observable subject
  this.dataService.sendMessage('Message from Home Component to App Component!');
  }
  
  clearMessages(): void {
  // clear messages
  this.dataService.clearMessages();
  }

  ngOnInit() {
    this.login = this.formBuilder.group({
      phone: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  onUserSubmit() {
    this._authService.userlogin(this.login.value)
    .subscribe(res => {
      localStorage.setItem('userToken',res.token);
      this.userdetail = res.userDetails
      this.dataService.sendMessage(res.userDetails);
      localStorage.setItem("userdata",JSON.stringify(this.userdetail));
      localStorage.setItem("username",this.userdetail.firstname);
      localStorage.setItem("userEmail",this.userdetail.email);
      localStorage.setItem("lastname",this.userdetail.lastname);
      localStorage.setItem("phone",this.userdetail.phone);
     localStorage.setItem("userID",this.userdetail._id);
     
      this.userID = localStorage.getItem('userID');
      this.firstname = localStorage.getItem('username');
      this.lastname = localStorage.getItem('lastname');
      this.phone = localStorage.getItem('phone');
      this.userEmail = localStorage.getItem('userEmail');
      this.routes.navigate(['user/user-profile'], { replaceUrl: true });              
    },
    err=> alert("Invalid Username or Password")
    
    );
      }

}

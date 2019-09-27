import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { adminLogin } from './admin';
// import { AdminserviceService } from './adminservice.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  login: FormGroup;

  
  constructor(private formBuilder: FormBuilder, private routes: Router, private _authService: AuthService) {
    
   }

  ngOnInit() {
    if(this._authService.adminLoggedIn()){
      this.routes.navigate(['admin/customer-list']);
    }

    this.login = this.formBuilder.group({
      adminUsername: ['', Validators.required],
      adminPassword: ['', Validators.required]
    });
  }
  onAdminSubmit() {

    console.log(this.login.value)
    this._authService.adminlogin(this.login.value)
      .subscribe(res => {
        console.log(res.token);
        localStorage.setItem('adminToken',res.token); 
        this.routes.navigate(['admin/customer-list']);
      },
      err=>alert("Invalid Username or Password")
      
      );
  }
}
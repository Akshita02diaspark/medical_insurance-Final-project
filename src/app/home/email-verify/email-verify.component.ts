import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.css']
})
export class EmailVerifyComponent implements OnInit {

  login: FormGroup;

  verifyStatus: {};

  constructor( private formBuilder: FormBuilder, private routes: Router, private _authService: AuthService) { }

  ngOnInit() {
    this.login = this.formBuilder.group({
      email: ['', Validators.required],
    });

  }

  submitOTP(){
    this._authService.verifyEmail(this.login.value)
    .subscribe(
      res=> {
        this.verifyStatus = res.message;
        alert(this.verifyStatus);
        this.routes.navigate(['home/confirm-password']);
      },
      err=> console.log(err)
    )
    console.log(this.login.value);
    
  }
  }



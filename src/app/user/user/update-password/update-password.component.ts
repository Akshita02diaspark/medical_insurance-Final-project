import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service'
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/home/data.service';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  updatepass: FormGroup;
  email;
  myData
  constructor(private _userService: UserServiceService, private dataService: DataService, private fb: FormBuilder,
    // tslint:disable-next-line:variable-name
    private routes: Router, ) {
  //     this.dataService.sendMessage(localStorage.getItem('userEmail'));

  //   this.subscription = this.dataService.getMessage().subscribe(message => {
  //     if (message) {
  //       this.email=JSON.parse(message.text)
  //       this.messages.push(message);
        
  //       // this.email = this.myData['userEmail'];
  //     } else {
  //       // clear messages when empty message received
  //       this.messages = [];
  //     }
  //   });
  this.email=localStorage.getItem('userEmail')
  }


  messages: any[] = [];
  subscription: Subscription;
  ngOnInit() {

    this.updatepass = this.fb.group({
      password: ['', Validators.required],
      newpassword: ['', Validators.required]
    })
  }

  update() {
    this._userService.updatePassword(this.email, this.updatepass.value)
      .subscribe(
        data => {
          // alert('Password updated successfully');
        },
        error => console.error(error)
      );
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

}

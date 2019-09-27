import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder, Validators, FormControl} from '@angular/forms';
import { AuthService } from 'src/app/home/auth.service';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/home/data.service';

@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
  styleUrls: ['./update-user-profile.component.css']
})
export class UpdateUserProfileComponent implements OnInit {

  updateForm: FormGroup;
  isSubmitted =false;

  id
  username;
  phone;
  userEmail;
  lastname;
  
  // tslint:disable-next-line:variable-name
  constructor(private formBuilder: FormBuilder, private _authService: AuthService, private dataService: DataService ) { 
    // this.subscription = this.dataService.getMessage().subscribe(message => {
    //   if (message) {
    //     this.messages.push(message);
    //     this.id = message.text.id;
    //   } else {
    //     // clear messages when empty message received
    //     this.messages = [];
    //   }
    // });
    this.id=localStorage.getItem('userID')
    this.username=localStorage.getItem('username')
    this.lastname=localStorage.getItem('lastname')
    this.phone=localStorage.getItem('phone')
    this.userEmail=localStorage.getItem('userEmail')

  }

  messages: any[] = [];
  subscription: Subscription;

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      firstname: [this.username, Validators.required],
      lastname: [this.lastname, Validators.required],
      email: [this.userEmail, [Validators.required,Validators.email]],
      phone: [this.phone, [Validators.required,Validators.minLength(10)]]

    });
  }

  updateSubmit() {
    this._authService.updateProfile(this.id,this.updateForm.value)
    .subscribe(res => {
      this.isSubmitted = true;
      console.log(res);
      if(this.updateForm.valid){}
      // alert('Data Submitted !! Our agent will get in touch with you ');
    });
    
  

      }


      get email() {
        return this.updateForm.get('email');
      }
      get contact() {
        return this.updateForm.get('contact');
      }
      get adhar() {
        return this.updateForm.get('adhar');
      }

}

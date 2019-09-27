import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitted = false;
  constructor(private formBuilder: FormBuilder, private routes: Router, private _authService: AuthService) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.min(10)]],
      message: ['', Validators.required]
    });
  }

  submit() {
    this._authService.contactlogin(this.contactForm.value)
      .subscribe(
        res => {
          this.isSubmitted = true;
          console.log(res);
          if(this.contactForm.valid){
            alert('Data Submitted !! Our agent will get in touch with you ');
          }
        },
        err => console.log('err', err))
  }

  // onReset() {
  //   this.isSubmitted = false;
  //   this.contactForm.reset();
  // }



  get email() {
    return this.contactForm.get('email');
  }
  get contact() {
    return this.contactForm.get('contact');
  }
  get fullname() {
    return this.contactForm.get('fullname');
  }
}

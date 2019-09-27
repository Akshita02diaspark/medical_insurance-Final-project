import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentserviceService } from '../agentservice.service';
@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  date = new Date();

  maxDate = (new Date().getFullYear()).toString() + "-0" + (new Date().getMonth() + 1).toString() + "-" + (new Date().getDate()).toString();



  constructor(private fb: FormBuilder,
    // tslint:disable-next-line:variable-name
    private routes: Router,
    // tslint:disable-next-line:variable-name
    private _agentService: AgentserviceService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      title: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.min(10)]],
      location: this.fb.group({
        address: ['', Validators.required],
        pin: ['', Validators.required],
        country: ['', Validators.required],
        state: ['', Validators.required],
        city: ['', Validators.required],
      }),
      policy: this.fb.group({
        policyName: ['', Validators.required],
        policyAmount: ['', Validators.required],
        premium: ['', Validators.required]
      }),
      gender: ['', Validators.required],
      pan: ['', Validators.required],
      adhar: ['', [Validators.required, Validators.min(12)]],
      birthdate: [''],
      nominie: this.fb.group({
        nominieName: ['', Validators.required],
        nominieRealtion: ['', Validators.required],
        nominieNumber: ['', Validators.required]
      }),


    }, {


    });




  }
  get f() { return this.registerForm.controls; }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }// display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    this._agentService.registeration(this.registerForm.value)
      .subscribe(
        data => {
          
          this.submitted = false;
          if (this.submitted == false)
            this.registerForm.reset();
        },
        error => console.error(error)
      );



  }


  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }


  dateChange(event) {
    console.log(event);




  }
}
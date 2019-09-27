import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/home/auth.service';

@Component({
  selector: 'app-agent-registration',
  templateUrl: './agent-registration.component.html',
  styleUrls: ['./agent-registration.component.css']
})
export class AgentRegistrationComponent implements OnInit {

  registerForm: FormGroup;
  isSubmitted =false;
  
  constructor( private fb : FormBuilder, private _authService: AuthService) { }

  ngOnInit() {

    this.registerForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone: ['', [Validators.required,Validators.minLength(10),,Validators.maxLength(10)]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required],
      confirm_password:['',Validators.required]
  })

}

  onSubmit(){
    this._authService.registerAgent(this.registerForm.value)
    .subscribe(
      res => {
        this.isSubmitted=true;
        // console.log(res)
      alert("Agent Registration Approved !")},
      // err => console.log(err)
     )
    
    
  }
  get email() {
    return this.registerForm.get('email');
  }
  get phone() {
    return this.registerForm.get('phone');
  }

  // All is this method
onPasswordChange() {
  if (this.confirm_password.value == this.password.value) {
    this.confirm_password.setErrors(null);
  } else {
    this.confirm_password.setErrors({ mismatch: true });
  }
}

// getting the form control elements
get password(): AbstractControl {
  return this.registerForm.controls['password'];
}

get confirm_password(): AbstractControl {
  return this.registerForm.controls['confirm_password'];
}


}

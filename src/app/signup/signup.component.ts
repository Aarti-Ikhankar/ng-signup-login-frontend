import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helper/must-match.validator';
import { UserService } from '../services/user.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  value = 100;
  myVal = "hello world"
  // constructor(private formBuilder: FormBuilder, private UserService: UserService) { }

  ngOnInit() {
    console.log('hello signup');

    // this.registerForm = this.formBuilder.group({
    //   first_name: ['', Validators.required],
    //   last_name: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(6)]],
    //   confirmPassword: ['', Validators.required],
    //   dob: ['', Validators.required],
    //   acceptTerms: [false, Validators.requiredTrue]
    // }, {
    //   validator: MustMatch('password', 'confirmPassword')
    // });
  }

  // convenience getter for easy access to form fields
  // get f() { return this.registerForm.controls; }

  // onSubmit() {
  //   this.submitted = true;

  //   // stop here if form is invalid
  //   if (this.registerForm.invalid) {
  //     return;
  //   } else {
  //     this.UserService.signup(this.registerForm.value).subscribe((data) => {
  //       console.log('signup success ', data);
  //     }, (error) => {
  //       console.log('signup error ', error);
  //     })
  //   }

  //   // display form values on success
  //   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  // }

  // onReset() {
  //   this.submitted = false;
  //   this.registerForm.reset();
  // }

  toggele() {
    this.submitted = !this.submitted;
  }

  toggeleAsync() {
    timer(500).subscribe(() => {
      this.toggele();
    })
  }
}

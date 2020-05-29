import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  submitted = false;

  // constructor(private formBuilder: FormBuilder, private UserService: UserService,private router:Router) { }

  ngOnInit() {
  //   console.log('hello login');
  //   this.loginForm = this.formBuilder.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required]]
  //   }, {
  //   });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

//   onSubmit() {
//     this.submitted = true;

//     // stop here if form is invalid
//     if (this.loginForm.invalid) {
//       return;
//     } else {
//       console.log('this.loginForm.value ==', this.loginForm.value);
//       this.UserService.login(this.loginForm.value).subscribe((data) => {
//         console.log('signup success ', data['data']['token']);
//         localStorage.setItem('token', data['data']['token']);
// this.router.navigate(['user/bloglist'])
//       }, (error) => {
//         console.log('signup error ', error);
//       })
//     }

//     // display form values on success
//     // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
//   }


}

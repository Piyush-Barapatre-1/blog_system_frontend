import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { UserService } from '../../Myservices/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
})
export class UserLoginComponent implements OnInit {
  constructor(
    private home: HomeComponent,
    private userservice: UserService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  userLogin: FormGroup;

  ngOnInit(): void {
    this.userLogin = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  gotoRegister() {
    this.home.logdisable = true;
    this.home.regdisable = false;
  }

  message: string;
  errorMessage: string;

  onSubmit() {
    console.log(this.userLogin.value);

    this.userservice.loginUser(this.userLogin.value).subscribe(
      (data) => {
        // this.message = data.message;
        localStorage.setItem("refresh_token", data.refresh_token)

        if (data.usertype == 'user') {
          this.router.navigateByUrl('/usermodule/loginsuccess');
        } else if (data.usertype == 'admin') {
          this.router.navigateByUrl('/adminmodule/adminloginsuccess');
        }
      },

      (error) => {
        this.errorMessage = error.message || 'An error occurred during login';
      }
    );
  }
}

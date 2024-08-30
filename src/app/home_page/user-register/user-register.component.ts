import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserService } from '../../Myservices/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent implements OnInit {

  constructor(private home: HomeComponent, private fb: FormBuilder, private userservice: UserService) { }


  userRegister: FormGroup

  ngOnInit(): void {
    this.userRegister = this.fb.group(
      {
        full_name: ["", [Validators.required]],
        username: ["", [Validators.required]],
        password: ["", [Validators.required]],
        usertype: ["", [Validators.required]]
      }
    )
  }

  gotoLogin() {
    this.home.regdisable = true
    this.home.logdisable = false
  }

  message: string
  error: string
  onSubmit() {
    this.userservice.registerUser(this.userRegister.value).subscribe(
      (data) => {
        this.message = data.message

      },

      (error) => {
        this.error = error.message
      }
    )
  }


}

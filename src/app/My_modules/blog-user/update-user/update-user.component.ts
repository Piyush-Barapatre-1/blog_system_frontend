import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUser, selectUserError, selectUserLoading } from '../../../My_store/BlogUser_store/user.selector';
import { UserService } from '../../../Myservices/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit {

  user$: Observable<any>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store, private fb: FormBuilder,  private userservice: UserService) {

    this.user$ = this.store.select(selectUser);
    this.loading$ = this.store.select(selectUserLoading);
    this.error$ = this.store.select(selectUserError);

  }




  userUpdate: FormGroup

  userdata: any
  ngOnInit(): void {

    this.userUpdate = this.fb.group(
      {
        full_name: ["", [Validators.required]],
        username: ["", [Validators.required]],
        password: ["", [Validators.required]],
        usertype: ["", [Validators.required]]
      })

    this.user$.subscribe(
      (data: any) => {

        this.userUpdate.controls['full_name'].setValue(data?.full_name)
        this.userUpdate.controls['username'].setValue(data?.username)
        this.userUpdate.controls['password'].setValue(data?.password)
        this.userUpdate.controls['usertype'].setValue(data?.usertype)
      }
    )


  }

  onSubmit() {

    this.userservice.updateuser(this.userUpdate.value).subscribe()
  }


}

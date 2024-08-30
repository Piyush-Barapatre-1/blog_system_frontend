import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUser, selectUserError, selectUserLoading } from '../../../My_store/BlogUser_store/user.selector';
import { OnIdentifyEffects } from '@ngrx/effects';
import { loadUser } from '../../../My_store/BlogUser_store/user.action';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent implements OnInit {

  user$: Observable<any>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store, private fb: FormBuilder) {

    this.user$ = this.store.select(selectUser);
    this.loading$ = this.store.select(selectUserLoading);
    this.error$ = this.store.select(selectUserError);

  }

  user: any

  ngOnInit(): void {

    this.store.dispatch(loadUser());

    this.user$.subscribe(
      async(data) => {
        
        this.user = await data
        
      }
    )
  }

 

}

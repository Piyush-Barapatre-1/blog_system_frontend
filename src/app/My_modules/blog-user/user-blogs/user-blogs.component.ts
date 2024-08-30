import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Myservices/user.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FormBuilder } from '@angular/forms';
import { selectUserBlogs, selectUserBlogsError, selectUserBlogsLoading } from '../../../My_store/UserBlogs_store/userblogs.selector';
import { loadUserBlogs } from '../../../My_store/UserBlogs_store/userblogs.action';

@Component({
  selector: 'app-user-blogs',
  templateUrl: './user-blogs.component.html',
  styleUrl: './user-blogs.component.css'
})
export class UserBlogsComponent implements OnInit {

  user_blogs$: Observable<any>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store, private userservice: UserService) {

    this.user_blogs$ = this.store.select(selectUserBlogs);
    this.loading$ = this.store.select(selectUserBlogsLoading);
    this.error$ = this.store.select(selectUserBlogsError);

  }

  user_blogs: any[]
  ngOnInit(): void {

    this.store.dispatch(loadUserBlogs()); 

    this.user_blogs$.subscribe(
       async (data:any[]) => {

        console.log("user blogs",data);
        
        this.user_blogs = await data

        // this.user = await data

      }
    )
  }


}



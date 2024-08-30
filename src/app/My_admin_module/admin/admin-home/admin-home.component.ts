import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUser, selectUserError, selectUserLoading, selectUserName } from '../../../My_store/BlogUser_store/user.selector';
import { loadUser } from '../../../My_store/BlogUser_store/user.action';
import { selectUserBlogs } from '../../../My_store/UserBlogs_store/userblogs.selector';
import { loadAdminUserBlogs } from '../../../My_store/UserBlogs_store/userblogs.action';
import { AdminService } from '../../../Myservices/admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {

  user$: Observable<any>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  user_blogs$: Observable<any>

  constructor(private store: Store, private adminservice: AdminService) {

    this.user$ = this.store.select(selectUser);
    this.loading$ = this.store.select(selectUserLoading);
    this.error$ = this.store.select(selectUserError);

    this.user_blogs$ = this.store.select(selectUserBlogs)

  }

  user: any
  user_blogs: any[]

  ngOnInit(): void {

    this.store.dispatch(loadUser());

    this.user$.subscribe(
      async (data) => {
        this.user = await data
      }
    )

    this.store.dispatch(loadAdminUserBlogs());

    this.user_blogs$.subscribe(
      async(data?: any) => {

        this.user_blogs = await data?.result
      }
    )
  }

  viewSingleUser: any

  viewContent(id: string) {
    this.user_blogs$.subscribe(
      (data: any) => {
        let mydata = data?.result?.filter((ele) => ele._id === id)

        if (Array.isArray(mydata)) {
          this.viewSingleUser = mydata[0]
        }
        else {
          this.viewSingleUser = mydata
        }

        const modalElement = document.getElementById("exampleModal")
        if (modalElement) {

          import('bootstrap').then((bootstrap) => {
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
          });

        }
      }
    )
    console.log(this.viewSingleUser);
  }

  message: string

  updatePublish(id: string) {
    let formData = new FormData()

    this.adminservice.updatepublish(id, formData).subscribe(
      (data: any) => {
        this.message = data.message

        window.location.reload()
      },

      (error) => {
        this.message = error.message
      }
    )
  }

}

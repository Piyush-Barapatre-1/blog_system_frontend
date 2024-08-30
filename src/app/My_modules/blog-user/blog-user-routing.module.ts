import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { RegisterBlogsComponent } from './register-blogs/register-blogs.component';
import { UserBlogsComponent } from './user-blogs/user-blogs.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {
    path: "loginsuccess", component: UserHomeComponent, children: [
      {
        path: '',
        redirectTo: 'update',
        pathMatch: 'full' // Ensure the path is fully matched for redirection
      },

      {
        path: "update", component: UpdateUserComponent
      },
      {
        path: "postblog", component: RegisterBlogsComponent
      },
      {
        path: "myblogs", component: UserBlogsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogUserRoutingModule { }

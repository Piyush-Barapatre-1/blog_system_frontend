import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogUserRoutingModule } from './blog-user-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { RegisterBlogsComponent } from './register-blogs/register-blogs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserBlogsComponent } from './user-blogs/user-blogs.component';
import { UpdateUserComponent } from './update-user/update-user.component';


@NgModule({
  declarations: [
    UserHomeComponent,
    RegisterBlogsComponent,
    UserBlogsComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    BlogUserRoutingModule,
    ReactiveFormsModule
  ]
})
export class BlogUserModule { }

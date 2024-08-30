import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home_page/home/home.component';
import { UserRegisterComponent } from './home_page/user-register/user-register.component';
import { UserLoginComponent } from './home_page/user-login/user-login.component';

const routes: Routes = [
  {
    path:"home", redirectTo:""
  },
  
  {
    path: "", component: HomeComponent, children: [
      {
        path:"login", component: UserLoginComponent
      },
      {
        path:"register", component: UserRegisterComponent
      }
    ]
  },
  {

    path: "usermodule", loadChildren: () => import("./My_modules/blog-user/blog-user.module").then(file => file.BlogUserModule)
  },
  {
    path: "adminmodule", loadChildren: () => import('./My_admin_module/admin/admin.module').then(file => file.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home_page/home/home.component';
import { UserRegisterComponent } from './home_page/user-register/user-register.component';
import { UserLoginComponent } from './home_page/user-login/user-login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserEffects } from './My_store/BlogUser_store/user.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './My_store/BlogUser_store/user.reducer';
import { userBlogReducer } from './My_store/UserBlogs_store/userblogs.reducer';
import { UserBlogEffects } from './My_store/UserBlogs_store/userblogs.effects';
import { DateformatPipe } from './My_pipes/dateformat.pipe';
import { LoggingInterceptor } from './My_interceptor/logging.interceptor';
import { AuthenticationInterceptor } from './My_interceptor/authentication.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserRegisterComponent,
    UserLoginComponent,
    DateformatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ user: userReducer, user_blogs: userBlogReducer }), // Register the userReducer
    EffectsModule.forRoot([UserEffects, UserBlogEffects]) // Register the UserEffects

  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true
    },

    {
      provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

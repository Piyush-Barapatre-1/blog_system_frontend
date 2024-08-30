import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogUser } from '../Mymodels/blog-user';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private accessTokenSubject = new BehaviorSubject<string>(null);
  accessToken$ = this.accessTokenSubject.asObservable();

  getAccessToken(): string {
    return this.accessTokenSubject.value;
  }

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:9000/"

  registerUser(data: any): Observable<any> {
    return this.http.post(`${this.url}register`, data)
  }

  loginUser(data: any): Observable<any> {
    return this.http.post(`${this.url}login`, data, { withCredentials: true })
      .pipe(
        tap(tokens => this.accessTokenSubject.next(tokens.accessToken))
      );
  }

  refreshToken() {
    return this.http.post<{ accessToken: string }>(`${this.url}refreshtoken`, {}, { withCredentials: true })
      .pipe(
        tap(({ accessToken }) => this.accessTokenSubject.next(accessToken))
      );
  }

  getUser(): Observable<any> {
    return this.http.get(`${this.url}getuser`, { withCredentials: true })
  }

  saveUserBlog(data: any): Observable<any> {
    return this.http.post(`${this.url}postblog`, data, { withCredentials: true })
  }

  getUserBlogs(): Observable<any> {
    return this.http.get(`${this.url}getuserblogs`, { withCredentials: true })
  }

  updateuser(data: any): Observable<any> {
    return this.http.put(`${this.url}updateuser`, data, { withCredentials: true })
  }
}

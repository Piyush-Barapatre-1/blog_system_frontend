import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:9000/"

  getAllUnpublishBlogs(): Observable<any> {
    return this.http.get(`${this.url}getallunpublishblogs`, { withCredentials: true })
  }

  updatepublish(id: string, data: any) {
    return this.http.put(`${this.url}updatepublish/${id}`, data)
  }

  getAllPublishBlogs(page: number) {

    console.log("called page", page);


    const params = new HttpParams()
      .set('page', page.toString());

    return this.http.get(`${this.url}getallpublishblogs`, { params })
  }

  searchText(text: string, page: number) {

    const params = new HttpParams()
      .set('page', page.toString());

    return this.http.get(`${this.url}searchtext/${text}`, { params })
  }
}

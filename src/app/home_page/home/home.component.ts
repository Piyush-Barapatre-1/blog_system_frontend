import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../Myservices/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private adminservice: AdminService, private router: Router) {

  }

  ngOnInit(): void {

    this.adminservice.getAllPublishBlogs(this.page).subscribe(

      (data: any) => {
        this.user_blogs = data?.result
      }
    )

  }

  logdisable: boolean = true
  regdisable: boolean = true

  gotoLogin() {

    this.regdisable = true
    this.logdisable = false

  }

  gotoRegister() {

    this.regdisable = false
    this.logdisable = true

  }

  gotoHome() {
    this.regdisable = true
    this.logdisable = true
  }


  page: number = 1;
  // limit: number = 10; // Number of items per page
  totalPages: number = 5;
  pages: number[] = [1, 2];

  user_blogs: any[]


  changePage(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.page = page;

      console.log(page);

      this.adminservice.getAllPublishBlogs(page).subscribe(
        (data: any) => {

          this.user_blogs = data?.result
          console.log(this.user_blogs);

        }
      )
    }
  }


  // Search functionality


  searchpage: number = 1;
  // limit: number = 10; // Number of items per page
  searchtotalPages: number = 2;
  searchpages: number[] = [1];


  searchResult: string[] = []

  searchText(text: string) {

    if (text == "") {
      this.searchResult = []
      window.location.reload()
    }

    this.adminservice.searchText(text, this.page).subscribe(
      (data: any) => {
        let result = data.result.forEach((items) => {
          console.log(items.blog_tags);
          
          if (!this.searchResult.includes(items.blog_tags)) {
            this.searchResult.push(items.blog_tags)
          }
        })

      }
    )
  }

  listValue: string = ""

  onSearch(text: any) {

    if (text != "") {

      this.listValue = text

      this.goToResult(text)
    }

  }

  user_searchresults: any[]

  goToResult(text: any) {

    this.adminservice.searchText(text, this.page).subscribe(
      (data: any) => {

        this.user_searchresults = data?.result

        if (this.user_searchresults) {

          console.log(this.user_searchresults);
          this.user_blogs = []
        }
      }
    )
  }



  changeSearchPage(page: number) {

    if (this.searchpage > 0 && page <= this.searchtotalPages) {
      this.searchpage = page;

      console.log(this.searchpage);

      console.log(this.listValue);

      this.adminservice.searchText(this.listValue, page).subscribe(
        (data: any) => {

          this.user_searchresults = data?.result

        }
      )
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Myservices/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-blogs',
  templateUrl: './register-blogs.component.html',
  styleUrl: './register-blogs.component.css'
})
export class RegisterBlogsComponent implements OnInit {

  constructor(private userservice: UserService, private fb: FormBuilder) {

  }

  registerBlog: FormGroup

  ngOnInit(): void {

    this.registerBlog = this.fb.group(
      {
        blog_title: ["", [Validators.required]],
        blog_description: ["", [Validators.required]],
        blog_tags: ["", [Validators.required]]
      }
    )

  }

  selectedFile: File | null = null;

  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  message: string

  onUpload(): void {
    if (this.selectedFile) {

      const formData = new FormData();
      formData.append('blog_title', this.registerBlog.get('blog_title')?.value);
      formData.append('blog_description', this.registerBlog.get('blog_description')?.value);
      formData.append('blog_tags', this.registerBlog.get('blog_tags')?.value);
      formData.append('file', this.selectedFile);

      this.userservice.saveUserBlog(formData).subscribe(
        (data) => {
          this.message = data.message
        },
        (error) => {

          this.message = error.message
        });
    }
  }
}

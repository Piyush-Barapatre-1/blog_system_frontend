export interface AdminUserBlogs {
  _id: string;
  created_by: string
  blog_title: string;
  blog_description: string;
}

export interface AdminBlogUser {
  _id: string;
  // full_name: string;
  username: string;
  user_blogs: AdminUserBlogs[]
}

export interface AdminBlogsState {

  user_info: AdminBlogUser[] | null;
  loading_info: boolean;
  error_info: string | null;
}

export const adminInitialState: AdminBlogsState = {
  user_info: null,
  loading_info: false,
  error_info: null
};

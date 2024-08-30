export interface UserBlogs {
    _id: string;
    created_by: string
    blog_title: string;
    blog_description: string;
  }

export interface BlogUser {
  _id: string
  full_name: string;
  user_blogs: UserBlogs[]
}

export interface UserState {
  user: BlogUser | null;
  loading: boolean;
  error: string | null;
}

export const initialState: UserState = {
  user: null,
  loading: false,
  error: null
};

export interface UserAdminState {
  user_info: BlogUser[] | null;
  loading: boolean;
  error: string | null;
}

export const adminInitialState: UserAdminState = {
  user_info: null,
  loading: false,
  error: null
};

export interface UserBlogsState {

  user_blogs: UserBlogs[] | null;
  loading: boolean;
  error: string | null;
}

export const blogsInitialState: UserBlogsState = {
  user_blogs: null,
  loading: false,
  error: null
};


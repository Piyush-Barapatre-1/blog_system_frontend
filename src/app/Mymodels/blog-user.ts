import { UserBlogs } from "./user-blogs"

export interface BlogUser {

    full_name: string
    username: string
    password: string
    user_blogs: UserBlogs[]
}

import { createReducer, on } from '@ngrx/store';
import { loadUserBlogs, loadUserBlogSuccess, loadUserBlogFailure, loadAdminUserBlogs, } from './userblogs.action';
import { UserState, blogsInitialState, initialState } from '../user.state';

export const userBlogReducer = createReducer(
    blogsInitialState,
    on(loadUserBlogs, (state) => ({
        ...state,
        loading: true,
        error: null
    })),

    on(loadAdminUserBlogs, (state) => ({
        ...state,
        loading: true,
        error: null
    })),

    on(loadUserBlogSuccess, (state, { user_blogs }) => ({
        ...state,
        user_blogs,
        loading: false
    })),
    on(loadUserBlogFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false
    })),
);
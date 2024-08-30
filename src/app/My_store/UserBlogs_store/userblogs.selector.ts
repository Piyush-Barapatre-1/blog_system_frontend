// user.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserBlogsState } from '../user.state';

export const selectUserBlogState = createFeatureSelector<UserBlogsState>('user_blogs');

export const selectUserBlogs = createSelector(
    selectUserBlogState,
  (state: UserBlogsState) => state.user_blogs
);

export const selectUserBlogsLoading = createSelector(
    selectUserBlogState,
  (state: UserBlogsState) => state.loading
);

export const selectUserBlogsError = createSelector(
    selectUserBlogState,
  (state: UserBlogsState) => state.error
);

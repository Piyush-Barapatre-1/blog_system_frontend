// user.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AdminBlogsState } from '../admin.state';
import { UserAdminState } from '../user.state';

export const selectAdminUserState = createFeatureSelector<UserAdminState>('user_info');

export const selectAdminUser = createSelector(
    selectAdminUserState,
    (state: UserAdminState) => state.user_info
);

export const selectAdminUserLoading = createSelector(
    selectAdminUserState,
    (state: UserAdminState) => state.loading
);

export const selectUserError = createSelector(
    selectAdminUserState,
    (state: UserAdminState) => state.error
);

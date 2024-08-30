import { createAction, props } from '@ngrx/store';
import { UserBlogs } from '../user.state';

export const loadUserBlogs = createAction(
    '[UserBlogs] Load User',
    //   props<{ }>()
);

export const loadAdminUserBlogs = createAction(
    '[UserBlogs] Load User',
    //   props<{ }>()
);

export const loadUserBlogSuccess = createAction(
    '[UserBlogs] Load User Success',
    props<{ user_blogs: UserBlogs[] }>()
);

export const loadUserBlogFailure = createAction(
    '[UserBlogs] Load User Failure',
    props<{ error: string }>()
);

// export const updateUser = createAction(  //update user will only update task inside user
//   '[User] Update User',
//   props<{ todo: Todo, token: string }>()
// );

// export const updateUserTask = createAction(
//   '[User] Update User Task',
//   props<{ todo: Todo, token: string, t_id:string }>()
// );

// export const deleteUserTask = createAction(
//   '[User] delete User Task',
//   props<{ t_id:string, token: string }>()
// );
import { createAction, props } from '@ngrx/store';
import { BlogUser } from '../user.state';

export const loadAdminUser = createAction(
    '[User] Load User',
  //   props<{ }>()
  );
  
  export const loadAdminUserSuccess = createAction(
    '[User] Load User Success',
    props<{ user_info: BlogUser[] }>()
  );

  export const loadAdminUserFailure = createAction(
    '[User] Load User Success',
    props<{ error: string }>()
  );














// import { createAction, props } from '@ngrx/store';
// import { AdminBlogUser } from '../admin.state';

// export const loadAdminUser = createAction(
//   '[User] Load User',
// //   props<{ }>()
// );

// export const loadAdminUserSuccess = createAction(
//   '[User] Load User Success',
//   props<{ user_info: AdminBlogUser[] }>()
// );

// export const loadAdminUserFailure = createAction(
//   '[User] Load User Failure',
//   props<{ error_info: string }>()
// );

// // export const updateUser = createAction(  //update user will only update task inside user
// //   '[User] Update User',
// //   props<{ todo: Todo, token: string }>()
// // );

// // export const updateUserTask = createAction(
// //   '[User] Update User Task',
// //   props<{ todo: Todo, token: string, t_id:string }>()
// // );

// // export const deleteUserTask = createAction(
// //   '[User] delete User Task',
// //   props<{ t_id:string, token: string }>()
// // );
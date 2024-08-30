import { createAction, props } from '@ngrx/store';
import { BlogUser } from '../user.state';

export const loadUser = createAction(
  '[User] Load User',
//   props<{ }>()
);

export const loadAdminUser = createAction(
  '[User] Load User',
//   props<{ }>()
);

export const loadAdminUserSuccess = createAction(
  '[User] Load User Success',
  props<{ user_info: BlogUser[] }>()
);

export const loadUserSuccess = createAction(
  '[User] Load User Success',
  props<{ user: BlogUser }>()
);

export const loadUserFailure = createAction(
  '[User] Load User Failure',
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
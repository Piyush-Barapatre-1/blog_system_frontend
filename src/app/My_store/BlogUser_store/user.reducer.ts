// src/app/store/user.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { loadUser, loadUserSuccess, loadUserFailure} from './user.action';
import { UserState, initialState } from '../user.state';

export const userReducer = createReducer(
  initialState,
  on(loadUser, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(loadUserSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false
  })),

  on(loadUserFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  //   on(updateUser, (state, { token, todo}) => ({
  //     ...state,
  //     token,
  //     todo,
  //     loading: true
  //   })),
  //   on(updateUserTask, (state, { token, todo, t_id  }) => ({
  //     ...state,
  //     token,
  //     todo,
  //     t_id,
  //     loading: true
  //   })),

  //   on(deleteUserTask, (state, { t_id, token  }) => ({
  //     ...state,
  //     token,
  //     t_id,
  //     loading: true
  //   }))

);

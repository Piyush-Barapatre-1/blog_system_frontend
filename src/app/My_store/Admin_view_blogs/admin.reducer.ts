
import { createReducer, on } from '@ngrx/store';
import { UserState, adminInitialState, initialState } from '../user.state';
import { loadAdminUser, loadAdminUserSuccess } from './admin.action';


export const adminReducer = createReducer(
    adminInitialState,

    on(loadAdminUser, (state) => ({
        ...state,
        loading: true,
        error: null
    })),

    on(loadAdminUserSuccess, (state, { user_info }) => ({
        ...state,
        user_info,
        loading: false
    }))
);















// // src/app/store/user.reducer.ts
// import { createReducer, on } from '@ngrx/store';
// import { loadAdminUser, loadAdminUserFailure, loadAdminUserSuccess } from './admin.action';
// import { adminInitialState } from '../admin.state';

// export const adminReducer = createReducer(

//     adminInitialState,

//     on(loadAdminUser, (state) => ({
//         ...state,
//         loading_info: true,
//         error_info: null
//     })),

//     on(loadAdminUserSuccess, (state, { user_info }) => ({
//         ...state,
//         user_info,
//         loading_info: false
//     })),

//     on(loadAdminUserFailure, (state, { error_info }) => ({
//         ...state,
//         error_info,
//         loading_info: false
//     })),
//     //     //   on(updateUser, (state, { token, todo}) => ({
//     //     //     ...state,
//     //     //     token,
//     //     //     todo,
//     //     //     loading: true
//     //     //   })),
//     //     //   on(updateUserTask, (state, { token, todo, t_id  }) => ({
//     //     //     ...state,
//     //     //     token,
//     //     //     todo,
//     //     //     t_id,
//     //     //     loading: true
//     //     //   })),

//     //     //   on(deleteUserTask, (state, { t_id, token  }) => ({
//     //     //     ...state,
//     //     //     token,
//     //     //     t_id,
//     //     //     loading: true
//     //     //   }))

// );

// src/app/store/user.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { loadUser, loadUserSuccess, loadUserFailure } from './user.action';
import { UserService } from '../../Myservices/user.service';
import { BlogUser } from '../user.state';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private userService: UserService) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUser),
      mergeMap((action) =>
        this.userService.getUser().pipe(
          map((user) => {
            // Ensure user is an object, not an array
            if (Array.isArray(user)) {
              user = user[0];
            }
            return loadUserSuccess({ user });
          }),
          catchError((error) => of(loadUserFailure({ error })))
        )
      )
    )
  );

  

//   updateUser$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(updateUser),
//       mergeMap((action) =>
//         this.userService.updateUser(action.todo, action.token).pipe(
//           map((user) => {
//             // Ensure user is an object, not an array
//             if (Array.isArray(user)) {
//               user = user[0];
//             }
//             return loadUserSuccess({ user });
//           }),
//           catchError((error) => of(loadUserFailure({ error })))
//         )
//       )
//     )
//   );

//   updateUserTask$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(updateUserTask),
//       mergeMap((action) =>
//         this.userService.updateUserTask(action.todo, action.token, action.t_id).pipe(
//           map((user) => {
//             // Ensure user is an object, not an array
//             if (Array.isArray(user)) {
//               user = user[0];
//             }
//             return loadUserSuccess({ user });
//           }),
//           catchError((error) => of(loadUserFailure({ error })))
//         )
//       )
//     )
//   );

//   deleteUserTask$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(deleteUserTask),
//       mergeMap((action) =>
//         this.userService.deleteUserTask(action.token, action.t_id).pipe(
//           map((user) => {
//             // Ensure user is an object, not an array
//             if (Array.isArray(user)) {
//               user = user[0];
//             }
//             return loadUserSuccess({ user });
//           }),
//           catchError((error) => of(loadUserFailure({ error })))
//         )
//       )
//     )
//   );

  
}

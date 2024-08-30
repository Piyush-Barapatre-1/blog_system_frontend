// src/app/store/user.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from '../../Myservices/user.service';
import { BlogUser } from '../user.state';
import { AdminService } from '../../Myservices/admin.service';
import { loadAdminUser, loadAdminUserFailure, loadAdminUserSuccess } from './admin.action';

@Injectable()
export class AdminEffects {

    constructor(private actions$: Actions, private userService: AdminService) { }

    loadUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadAdminUser),
            mergeMap((action) =>
                this.userService.getAllUnpublishBlogs().pipe(
                    map((user_info) => {
                        // Ensure user is an object, not an array
                        if (Array.isArray(user_info)) {
                            user_info = user_info[0];
                        }
                        return loadAdminUserSuccess({ user_info });
                    }),
                    catchError((error) => of(loadAdminUserFailure({ error })))
                )
            )
        )
    );
}
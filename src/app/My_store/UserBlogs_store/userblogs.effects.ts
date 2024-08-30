// src/app/store/user.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { loadAdminUserBlogs, loadUserBlogFailure, loadUserBlogs, loadUserBlogSuccess } from './userblogs.action';
import { UserService } from '../../Myservices/user.service';
import { AdminService } from '../../Myservices/admin.service';

@Injectable()
export class UserBlogEffects {

    constructor(private actions$: Actions, private userService: UserService, private adminservice: AdminService) { }

    loadUserBlog$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadUserBlogs),
            mergeMap((action) =>
                this.userService.getUserBlogs().pipe(
                    map((user_blogs) => {
                        // Ensure user is an object, not an array
                        // if (Array.isArray(user_blogs)) {
                        //     user_blogs = user_blogs[0];
                        // }
                        return loadUserBlogSuccess({ user_blogs });
                    }),
                    catchError((error) => of(loadUserBlogFailure({ error })))
                )
            )
        )
    );


    loadAdminUserBlog$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadAdminUserBlogs),
            mergeMap((action) =>
                this.adminservice.getAllUnpublishBlogs().pipe(
                    map((user_blogs) => {

                        console.log("user blogs",user_blogs);
                        
                        // Ensure user is an object, not an array
                        // if (Array.isArray(user_blogs)) {
                        //     user_blogs = user_blogs[0];
                        // }
                        return loadUserBlogSuccess({ user_blogs });
                    }),
                    catchError((error) => of(loadUserBlogFailure({ error })))
                )
            )
        )
    );
}
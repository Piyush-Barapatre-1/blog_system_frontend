import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, Observable, switchMap, tap, throwError } from "rxjs";

export class AuthenticationInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.url.includes("/loginuser")) {

            return next.handle(req).pipe(
                catchError(error => {
                    if (error instanceof HttpErrorResponse && error.status === 401) {
                        return this.handle401Error(req, next);
                    } else {
                        return throwError(error);
                    }
                })
            );

        }
        else {
            return next.handle(req)
        }

    }

    private handle401Error(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const refresh_token = localStorage.getItem("refresh_token")

        const modifiedRequest = req.clone({ headers: req.headers.append("refresh_token", `bearer ${refresh_token}`) })

        if (refresh_token) {

            return next.handle(modifiedRequest)

        } else {
            return throwError(() => new Error('No refresh token available'))
        }


    }

}
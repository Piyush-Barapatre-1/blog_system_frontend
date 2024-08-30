import { HttpEvent, HttpEventType, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class LoggingInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("interceptor 1 called");
    
    const modifiedreq = req.clone({ headers: req.headers.append('authheader', 'abc') })
    return next.handle(modifiedreq).pipe(tap((event) => {
      if (event.type === HttpEventType.Response) {

        console.log("Response Received");
        console.log(event.body);
      }
    }))

  }



}
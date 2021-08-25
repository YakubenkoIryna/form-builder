import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private auth: AuthService,
        private router: Router
    ) { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.auth.logIn()) {
            req = req.clone({
                setParams: {
                    auth: this.auth.token,
                }
            });
        }
        return next.handle(req)
            .pipe(
                tap((event) => {
                    if (event instanceof HttpResponse) {
                        this.router.navigate(['/form-builder']);
                    }
                }),
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 403) {
                        this.auth.logout();
                        this.router.navigate(['/login']);
                        alert('You dont have a permission! Check your email and password!')
                    }
                    return throwError(error);
                })
            );
    }
}

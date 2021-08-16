import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { IUser } from '../interfaces/interface';
import { throwError } from 'rxjs';
import { RequestService } from './request.service';


@Injectable({
    providedIn: 'root'
})

export class AuthService {

    token: string;

    constructor(
        private loginUserService: RequestService,
        public router: Router
    ) {
    }

    login(user: IUser) {
        this.loginUserService.loginUser(user)
            .subscribe((res: any) => {
                if (res.token) {
                    localStorage.setItem('ourToken', res.token);
                    this.router.navigate(['/form-builder']);
                }
            });
    }

    logout() {
        localStorage.removeItem('ourToken');
    }

    public get logIn(): boolean {
        return (localStorage.getItem('ourToken') !== null);
    }

    public handleError(error: HttpErrorResponse) {
        if (error.error.errorMessage) {
            window.alert('You do not have a permission!');
        }
        return throwError(error);
    }
}

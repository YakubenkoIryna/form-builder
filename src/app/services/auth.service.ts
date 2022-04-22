import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IUser } from '../interfaces/interface';
import { RequestService } from './request.service';


@Injectable({
    providedIn: 'root'
})

export class AuthService implements OnDestroy {

    // token: string;
    public ngUnsubscribe$ = new Subject<void>();

    constructor(
        private loginUserService: RequestService,
        public router: Router
    ) {
    }

    login(user: IUser): void {
        this.loginUserService.loginUser(user)
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe((res: any) => {
                res.token
                    ? ( localStorage.setItem('ourToken', res.token),
                      this.router.navigate(['/form-builder']))
                    : null
            });
    }

    logout(): void {
        localStorage.removeItem('ourToken');
    }

    logIn(): boolean | any {
        return of((localStorage.getItem('ourToken') !== null));
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }
}

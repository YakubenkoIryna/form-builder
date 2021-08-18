import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../interfaces/interface';
import { Subject } from 'rxjs';
import { RequestService } from './request.service';
import { takeUntil } from "rxjs/operators";


@Injectable({
    providedIn: 'root'
})

export class AuthService {

    token: string;
    public ngUnsubscribe$ = new Subject<void>();

    constructor(
        private loginUserService: RequestService,
        public router: Router
    ) {
    }

    login(user: IUser) {
        this.loginUserService.loginUser(user)
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe((res: any) => {
                if (res.token) {
                    localStorage.setItem('ourToken', res.token);
                    this.router.navigate(['/form-builder']).then(res)
                }
            });
    }

    logout() {
        localStorage.removeItem('ourToken');
    }

    public get logIn(): boolean | any {
        return (localStorage.getItem('ourToken') !== null);
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }
}

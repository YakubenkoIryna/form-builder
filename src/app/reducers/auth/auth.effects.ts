import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import {
    AuthActionTypes,
    LoginFailedAction, LoginSuccessAction
} from './auth.actions';


@Injectable()

export class AuthEffects{

    constructor(
        private actions$: Actions,
        private authService: AuthService,

    ) {
    }
    onLogin$ = createEffect((): Observable<any> => {
           return  this.actions$.pipe(
               ofType(AuthActionTypes.login),
               mergeMap(() => {
                   return this.authService.logIn().pipe(
                       map( () => {
                           return  new LoginSuccessAction({user: Object})
                       }),
                       catchError(error => of(new LoginFailedAction(error)))
                   )
               })
       )
       }
    )
}

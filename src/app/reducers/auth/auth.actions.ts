import { Action } from '@ngrx/store';

export enum AuthActionTypes {
    login = '[Auth] login',
    loginSuccess = '[Auth] login success',
    loginFailed = '[Auth] login failed'
}

export class LoginAction implements Action {
    readonly type = AuthActionTypes.login;

    constructor(
        public payload: { user }
    ) {
    }
}

export class LoginSuccessAction implements Action {
    readonly type = AuthActionTypes.loginSuccess;

    constructor(
        public payload: { user }
    ) {
    }
}

export class LoginFailedAction implements Action {
    readonly type = AuthActionTypes.loginFailed;

    constructor(
        public payload: { Error }
    ) {
    }
}


export type AuthActions = LoginAction | LoginSuccessAction | LoginFailedAction;

import { IError, IUser } from '../../interfaces/interface';
import { AuthActions, AuthActionTypes } from './auth.actions'

export const authReducerNode = 'auth-reducer';

export interface AuthState {
    user?: IUser;
    error?: IError;
}

export const initialState: AuthState = { }


export function AuthReducer(state = initialState, action: AuthActions) {
    switch (action.type) {
        case AuthActionTypes.login:
            return {
                ...state,
                [action.payload.user.email]: { user: action.payload.user, error: null }
            }
        case AuthActionTypes.loginSuccess:
            return {
                ...state,
                [action.payload.user.email]: { user: action.payload.user, error: null }
            }
        case AuthActionTypes.loginFailed:
            return {
                ...state,
                [action.payload.Error]: { error: action.payload.Error, user: null }
            }
        default:
            return state;
    }
}


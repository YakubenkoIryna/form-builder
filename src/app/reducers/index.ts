import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { FormReducer, formReducerNode } from './forms/forms.reducers';
import { AuthReducer, authReducerNode, AuthState } from './auth/auth.reducers';
import { IFormElementStyleState } from '../interfaces/interface';
import * as formSelector from './forms/forms.selectors';
import * as authSelector from './auth/auth.selectors';


export interface IState {
    [formReducerNode]: IFormElementStyleState;
    [authReducerNode]: AuthState;
}

export const reducers: ActionReducerMap<IState> = {
    [formReducerNode]: FormReducer,
    [authReducerNode]: AuthReducer,
};
export const getFormBuilderState = (state: IState) => state[formReducerNode];

export const getAuthState = (state: AuthState) => state[authReducerNode]


export const getFormsState = createSelector(
    getFormBuilderState,
    formSelector.selectFormElements
)
export const getAuthorizationState = createSelector(
    getAuthState,
    authSelector.selectAuth
)

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];

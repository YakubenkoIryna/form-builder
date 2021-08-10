import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {FormReducer, formReducerNode} from "../state/forms.reducers";
import {IFormElementStyleState} from "../interface";

export interface IState {
    [formReducerNode]: IFormElementStyleState;
}

export const reducers: ActionReducerMap<IState> = {
 [formReducerNode]: FormReducer
};

export const getFormBuilderState = (state: IState) => state[formReducerNode];

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
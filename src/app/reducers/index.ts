import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { FormReducer, formReducerNode } from './forms/forms.reducers';
import { IFormElementStyleState } from '../interfaces/interface';
import * as formSelector from './forms/forms.selectors'

export interface IState {
    [formReducerNode]: IFormElementStyleState;
}
export const reducers: ActionReducerMap<IState> = {
    [formReducerNode]: FormReducer
};
export const getFormBuilderState = (state: IState) => state[formReducerNode];

export const getFormsState = createSelector(
    getFormBuilderState,
    formSelector.selectFormElements
)

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];

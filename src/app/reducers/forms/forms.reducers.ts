import { FormsActions, FormsActionTypes } from './forms.actions';
import { IFormElementStyleState } from '../../interface';

export const formReducerNode = 'form-reducer';

export const initialState: IFormElementStyleState = {};

export function FormReducer(state= initialState, action: FormsActions){
    switch(action.type){
        case FormsActionTypes.addElement:
            return {...state, [action.payload.id]:{title:action.payload.title}};
        case FormsActionTypes.deleteElement:
            let newState = { ...state };
            delete newState[action.payload.id];
            return newState;
        default: return state;
    }
}



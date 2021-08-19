import { FormsActions, FormsActionTypes } from './forms.actions';
import { IFormElementStyleState } from '../../interfaces/interface';


export const formReducerNode = 'form-reducer';

export const initialState: IFormElementStyleState = { };


export function FormReducer(state = initialState, action: FormsActions) {
    switch (action.type) {
        case FormsActionTypes.addElement:
            return { ...state,
                    [action.payload.id]: { title: action.payload.title, styles: action.payload.styles }
            };
        case FormsActionTypes.deleteElement:
            const newState = { ...state };
            delete newState[action.payload.id];
            return newState;
        case FormsActionTypes.editElementStyles:

            return { ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    styles: {
                        ...state[action.payload.id].styles,
                        [action.payload.character]:
                            (action.payload.character !== ' ')
                                ? action.payload.value
                                : action.payload.value.split('-')}
                    }
            };

        default:
            return state;
    }
}

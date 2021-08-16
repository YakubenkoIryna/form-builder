import { Action } from '@ngrx/store';

export enum FormsActionTypes {
    addElement = '[ADD_ELEMENT] add element',
    deleteElement = '[DELETE_ELEMENT] delete element',
    editElementStyles = '[EDIT_ELEMENT] edit element styles'
}

export class AddElementAction implements Action {
    readonly  type = FormsActionTypes.addElement;
    constructor(
        public payload: { id: number, title: string, styles: object }
    ) { }
}
export class DeleteElementAction implements Action {
    readonly type = FormsActionTypes.deleteElement;
    constructor(
        public payload: { id: number }
    ) { }
}
export class EditElementStylesAction implements Action {
    readonly  type = FormsActionTypes.editElementStyles;
    constructor(
        public payload: { id: number, character: string, value: string }
    ) { }
}

export type FormsActions =  AddElementAction | DeleteElementAction | EditElementStylesAction;

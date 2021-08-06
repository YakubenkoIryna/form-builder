import { Action } from '@ngrx/store';

export enum FormsActionTypes {
    addElement = '[ADD_ELEMENT] add element',
    deleteElement = '[DELETE_ELEMENT] delete element'
}

export class AddElementAction implements Action{
    readonly  type = FormsActionTypes.addElement;
    constructor(
        public payload: {id: number, title: string}
    ) { }
}
export class DeleteElementAction implements Action{
    readonly type = FormsActionTypes.deleteElement;
    constructor(
        public payload: {id:number}
    ) { }
}

export type FormsActions =  AddElementAction | DeleteElementAction


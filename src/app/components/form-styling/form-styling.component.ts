import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getFormBuilderState, IState } from '../../reducers';
import { FormGroup } from '@angular/forms';
import { EditElementStylesAction } from '../../reducers/forms/forms.actions';


@Component({
    selector: 'app-form-styling',
    templateUrl: './form-styling.component.html',
    styleUrls: ['./form-styling.component.scss']
})
export class FormStylingComponent implements OnInit {

    items = {};
    stylesList = [];
    formStyle: FormGroup;
    value = '';

    public state = this.store$.select(getFormBuilderState);

    constructor(private store$: Store<IState>) {
    }

    ngOnInit(): void {
        this.getItems();
    }

    getItems(): void {
        this.state.subscribe(data => this.items = data);
    }
    onCancel(character: string): void{
        this.stylesList = this.stylesList.filter( elem => elem !== character);
    }
    onEdit(character: string): void{
        this.stylesList.push(character);
    }
    onSubmit(id: number, character: string, value: string): void{
        this.store$.dispatch( new EditElementStylesAction({ id, character, value }));
        this.stylesList = this.stylesList.filter( elem => elem !== character);
        this.value = '';
    }

}

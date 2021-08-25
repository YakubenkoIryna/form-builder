import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { getFormsState, IState } from '../../reducers';
import { EditElementStylesAction } from '../../reducers/forms/forms.actions';


@Input('ngModel')
@Component({
    selector: 'app-form-styling',
    templateUrl: './form-styling.component.html',
    styleUrls: ['./form-styling.component.scss']
})
export class FormStylingComponent implements OnInit, OnDestroy {

    items = {};
    stylesList = [];
    formStyle: FormGroup;
    value = '';
    public ngUnsubscribe$ = new Subject<void>();
    public state$ = this.store$.select(getFormsState);

    constructor(private store$: Store<IState>) { }

    ngOnInit(): void {
        this.getItems();
    }

    getItems(): void {
        this.state$
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe(data => this.items = data);
    }

    onCancel(character: string): void {
        this.stylesList = this.stylesList.filter(elem => elem !== character);
    }

    onEdit(character: string): void {
        this.stylesList.push(character);
    }

    onSubmit(id: number, character: string, value: string): void {
        this.store$.dispatch(new EditElementStylesAction({ id, character, value }));
        this.stylesList = this.stylesList.filter(elem => elem !== character);
        this.value = '';
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }
}

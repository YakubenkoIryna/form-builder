import { Component, OnDestroy, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AddElementAction } from '../../reducers/forms/forms.actions';
import { CElementsStandardParams } from '../../constantes/constantes';
import { getFormsState, IState } from '../../reducers';
import { IFormElements } from '../../interfaces/interface';


@Component({
    selector: 'app-form-builder',
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.scss']
})

export class FormBuilderComponent implements OnInit, OnDestroy {

    addedObjects = [];
    id: number;
    currentElement: IFormElements;
    elementNew: IFormElements;
    elementStyles = CElementsStandardParams;
    style: IFormElements;
    updatedElements: {};
    public ngUnsubscribe$ = new Subject<void>();

    constructor(private store$: Store<IState>) { }

    addElements(id: number, title: string, styles: object): void {
        this.store$.dispatch(new AddElementAction({ id, title, styles }));
    }

    onDrop(event: CdkDragDrop<any>): void {
        if (event.previousContainer === event.container) {
            moveItemInArray(
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        } else {
            this.id = new Date().getTime();
            this.currentElement = event.previousContainer.data[event.previousIndex];
            this.style = this.elementStyles[this.currentElement.title];
            this.elementNew = { ...this.currentElement, id: this.id, styles: this.style.styles };
            this.addedObjects.push(this.elementNew);
            this.addElements(this.id, this.elementNew.title, this.elementNew.styles);
        }
    }

    ngOnInit(): void {
        const state$ = this.store$.select(getFormsState);
        state$
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe(data => {
                this.updatedElements = data;
            });
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }
}

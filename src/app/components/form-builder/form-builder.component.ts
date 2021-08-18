import { Component, OnChanges, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { AddElementAction } from '../../reducers/forms/forms.actions';
import { CElementsStandardParams } from '../../constantes/constantes';
import { getFormsState, IState } from '../../reducers';
import { Observable } from 'rxjs';
import { takeUntil } from "rxjs/operators";


@Component({
    selector: 'app-form-builder',
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.scss']
})

export class FormBuilderComponent implements OnInit, OnChanges{

    addedObjects = [];
    id: number;
    currentElement: any;
    elementNew: any;
    elementStyles: any = CElementsStandardParams;
    style: any;
    updatedStyles: {};

    public state = this.store$.select(getFormsState);

    constructor(private store$: Store<IState>) {
    }

    addElements(id: number, title: string, styles: object): void {
        this.store$.dispatch(new AddElementAction({ id, title, styles}));
    }

    onDrop(event: CdkDragDrop<string[]>): void {
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
        this.getItems();
    }

    getItems(): void {
        this.state.subscribe(data => this.updatedStyles = data);
    }
    ngOnChanges(){
        this.elementStyles = this.updatedStyles
        console.log('el', this.elementStyles)

    }

}

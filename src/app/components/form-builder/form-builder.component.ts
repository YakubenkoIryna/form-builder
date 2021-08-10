import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {Store} from "@ngrx/store";
import {IFormElementStyleState} from "../../interface";
import {AddElementAction} from "../../state/forms.actions";

@Component({
    selector: 'app-form-builder',
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.scss']
})

export class FormBuilderComponent implements OnInit {

    addedObjects = [];
    id: number;
    currentElement;
    elementNew;

    constructor( private store$: Store<IFormElementStyleState>) { }

    ngOnInit(): void { }

    addElements( id: number, title: string){
        this.store$.dispatch( new AddElementAction({id, title}))
    }

    onDrop(event: CdkDragDrop<string[]>){
        if (event.previousContainer === event.container){
            moveItemInArray(
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        } else{
            this.id = new Date().getTime();
            this.currentElement = event.previousContainer.data[event.previousIndex];
            this.elementNew = {...this.currentElement, id: this.id}
            this.addedObjects.push(this.elementNew);
            this.addElements( this.id, this.elementNew.title);
        }
    }
}

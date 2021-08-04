import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray} from "@angular/cdk/drag-drop";


@Component({
    selector: 'app-form-builder',
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

    addedObjects = []

    constructor() { }

    ngOnInit(): void {
    }
    onDrop(event: CdkDragDrop<string[]>){
        if (event.previousContainer === event.container){
            moveItemInArray(
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        } else{
            // copyArrayItem(
                // event.previousContainer.data,
                // event.container.data,
                // event.previousIndex,
                // event.currentIndex);
            this.addedObjects.push(event.previousContainer.data[event.previousIndex])
            console.log("111111111111",this.addedObjects)
        }
        console.log('event', event)

    }

}

import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CdkDragDrop, transferArrayItem} from "@angular/cdk/drag-drop";
import {DeleteElementAction} from "../../state/forms.actions";
import {Store} from "@ngrx/store";
import {IFormElements, IFormElementStyleState} from "../../interface";


@Component({
    selector: 'app-available-fields',
    templateUrl: './available-fields.component.html',
    styleUrls: ['./available-fields.component.scss']
})
export class AvailableFieldsComponent implements OnInit {

    objects: IFormElements[] = []
    id;

    constructor(
        private http: HttpClient,
        private store$: Store<IFormElementStyleState>
    ){ }

    ngOnInit() {
        this.http.get<IFormElements[]>('http://localhost:3000/components')
            .subscribe(objects => {
                this.objects = objects;
            })
    }
    onDrop(event: CdkDragDrop<string[]>){
        if (event.previousContainer !== event.container){
                transferArrayItem(
                event.previousContainer.data,
                event.container.data.concat(),
                event.previousIndex,
                event.currentIndex);
                this.id = event.item.element.nativeElement.dataset.id;
                this.deleteElements(this.id)
        }
    }
    deleteElements(id:number){
        this.store$.dispatch(new DeleteElementAction({id}))
    }
}

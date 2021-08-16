import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { DeleteElementAction } from '../../reducers/forms/forms.actions';
import { Store } from '@ngrx/store';
import { IFormElements, IFormElementStyleState } from '../../interfaces/interface';
import { RequestService } from '../../services/request.service';


@Component({
    selector: 'app-available-fields',
    templateUrl: './available-fields.component.html',
    styleUrls: ['./available-fields.component.scss']
})
export class AvailableFieldsComponent implements OnInit {

    objects: IFormElements[] = [];
    id: any;

    constructor(
        private requestService: RequestService,
        private store$: Store<IFormElementStyleState>
    ) {
    }

    ngOnInit(): void {
        this.requestService.getObjects()
            .subscribe(objects => {
                this.objects = objects;
            });
    }

    onDrop(event: CdkDragDrop<string[]>): void {
        if (event.previousContainer !== event.container) {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data.concat(),
                event.previousIndex,
                event.currentIndex);
            this.id = event.item.element.nativeElement.dataset.id;
            this.deleteElements(this.id);
        }
    }

    deleteElements(id: number): void {
        this.store$.dispatch(new DeleteElementAction({ id }));
    }
}

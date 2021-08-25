import { Component, OnDestroy, OnInit } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { RequestService } from '../../services/request.service';
import { IFormElements, IFormElementStyleState } from '../../interfaces/interface';
import { DeleteElementAction } from '../../reducers/forms/forms.actions';


@Component({
    selector: 'app-available-fields',
    templateUrl: './available-fields.component.html',
    styleUrls: ['./available-fields.component.scss']
})
export class AvailableFieldsComponent implements OnInit, OnDestroy {

    objects: IFormElements[] = [];
    id: number | string;
    public ngUnsubscribe$ = new Subject<void>();

    constructor(
        private requestService: RequestService,
        private store$: Store<IFormElementStyleState>
    ) { }

    ngOnInit(): void {
        this.requestService.getObjects()
            .pipe(takeUntil(this.ngUnsubscribe$))
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
            // @ts-ignore
            this.deleteElements(this.id);
        }
    }

    deleteElements(id: number): void {
        this.store$.dispatch(new DeleteElementAction({ id }));
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }

}

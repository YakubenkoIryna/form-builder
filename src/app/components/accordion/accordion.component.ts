import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getFormBuilderState, IState } from '../../reducers';

@Component({
    selector: 'app-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

    items = {};
    public state = this.store$.select(getFormBuilderState);

    constructor(private store$: Store<IState>) {
    }

    ngOnInit(): void {
        this.getItems();
    }

    getItems(): void {
        this.state.subscribe(data => this.items = data);
    }

}

import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CdkDragDrop, transferArrayItem} from "@angular/cdk/drag-drop";

export interface obj {
    title: string
    id: number
}

@Component({
    selector: 'app-available-fields',
    templateUrl: './available-fields.component.html',
    styleUrls: ['./available-fields.component.scss']
})
export class AvailableFieldsComponent implements OnInit {

    objects: obj[] = []

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get<obj[]>('http://localhost:3000/components')
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
        }
    }
}

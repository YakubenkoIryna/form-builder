import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CdkDragDrop, moveItemInArray, transferArrayItem,} from "@angular/cdk/drag-drop";

export interface obj {
    available: boolean
    title: string
    id?: number
}

@Component({
    selector: 'app-available-fields',
    templateUrl: './available-fields.component.html',
    styleUrls: ['./available-fields.component.scss']
})
export class AvailableFieldsComponent implements OnInit {
    objects: obj[] = []

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get<obj[]>('http://localhost:3000/components')
            .subscribe(objects => {
                console.log('Response', objects)
                this.objects = objects
            })
    }

}

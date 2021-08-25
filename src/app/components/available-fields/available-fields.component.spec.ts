import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { AvailableFieldsComponent } from './available-fields.component';
import { RequestService } from '../../services/request.service';


describe('AvailableFieldsComponent', () => {
    let component: AvailableFieldsComponent;
    let service: RequestService;
    let store: Store;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AvailableFieldsComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        service = new RequestService(null)
        component = new AvailableFieldsComponent(service, store);

    });
    it('should return objects when ngOnInit', () => {
        const spy = spyOn(service, 'getObjects').and.callFake(() => {
            return EMPTY
        });
        component.ngOnInit();
        expect(spy).toHaveBeenCalled();
    });

});

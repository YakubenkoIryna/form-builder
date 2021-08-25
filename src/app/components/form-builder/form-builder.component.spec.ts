import { TestBed } from '@angular/core/testing';
import { FormBuilderComponent } from './form-builder.component';


describe('FormBuilderComponent', () => {
    let component: FormBuilderComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FormBuilderComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        return component = new FormBuilderComponent(null);
    });

    it('create form-builder', () => {
        expect(component).toBeTruthy();
    });

});

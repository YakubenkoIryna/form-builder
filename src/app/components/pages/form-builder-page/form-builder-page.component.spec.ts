import { TestBed } from '@angular/core/testing';
import { FormBuilderPageComponent } from './form-builder-page.component';
import { AuthService } from 'src/app/services/auth.service';


describe('FormBuilderPageComponent', () => {
    let component: FormBuilderPageComponent;
    let service: AuthService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FormBuilderPageComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        service = new AuthService(null, null);
        component = new FormBuilderPageComponent(service, null);
    });

    it('create form builder page component', () => {
        expect(component).toBeTruthy();
    });
});

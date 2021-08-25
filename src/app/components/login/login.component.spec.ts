import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/services/auth.service';



describe('LoginComponent', () => {
    let component: LoginComponent;
    let service: AuthService;
    let store: Store;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LoginComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        service = new AuthService(null, null);
        component = new LoginComponent(store, service);
    });

    it('should login', () => {
        expect(component).toBeTruthy();
    });
});

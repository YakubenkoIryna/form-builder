import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AuthService } from '../../services/auth.service';
import { IUser } from '../../interfaces/interface';
import { LoginAction } from '../../reducers/auth/auth.actions';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup;

    constructor(private store: Store, public auth: AuthService) { }

    ngOnInit(): void {
        this.form = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.email
            ]),
            password: new FormControl(null, [
                Validators.required,
                Validators.minLength(6),
                Validators.pattern(/^[a-zA-Z0-9]+$/)
            ])
        });
    }

    submit(): void {
        if (this.form.invalid) {
            return;
        }
        const user: IUser = {
            email: this.form.value.email,
            password: this.form.value.password
        };
        this.auth.login(user);
        this.form.reset();
        this.store.dispatch(new LoginAction({ user }));
    }
}

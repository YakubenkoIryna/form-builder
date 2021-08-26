import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
    selector: 'app-home-page',
    templateUrl: './form-builder-page.component.html',
    styleUrls: ['./form-builder-page.component.scss']
})
export class FormBuilderPageComponent {

    constructor(public auth: AuthService, private route: Router) { }

    logout() {
        this.auth.logout();
        this.route.navigate(['/']);
    }
}

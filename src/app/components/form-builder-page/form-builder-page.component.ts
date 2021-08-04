import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";


@Component({
    selector: 'app-home-page',
    templateUrl: './form-builder-page.component.html',
    styleUrls: ['./form-builder-page.component.scss']
})
export class FormBuilderPageComponent implements OnInit {

    constructor(
        public auth: AuthService,
        private route: Router
    ) { }

    ngOnInit(): void {
    }

    logout() {
        this.auth.logout()
        this.route.navigate(['/login'])

    }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { StoreModule } from '@ngrx/store';

import { LoginComponent } from '../components/login/login.component';
import { AdminLayoutComponent } from '../components/layout/admin-layout/admin-layout.component';
import { AuthService } from '../services/auth.service';
import { FormBuilderPageComponent } from '../components/pages/form-builder-page/form-builder-page.component';
import { FormStylingComponent } from '../components/form-styling/form-styling.component';
import { FormBuilderComponent } from '../components/form-builder/form-builder.component';
import { AvailableFieldsComponent } from '../components/available-fields/available-fields.component';
import { AuthGuard } from '../auth/guard/auth.guard';
import { HomePageComponent } from '../components/pages/home-page/home-page.component';
import { FormReducer } from '../reducers/forms/forms.reducers';
import { AuthInterceptor } from '../auth/interceptor/auth.interceptor';


@NgModule({
    declarations: [
        LoginComponent,
        AdminLayoutComponent,
        FormBuilderPageComponent,
        FormStylingComponent,
        FormBuilderComponent,
        AvailableFieldsComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        DragDropModule,
        CdkAccordionModule,
        StoreModule.forRoot({ formsB: FormReducer }),
        RouterModule.forChild([
            {
                path: '', component: AdminLayoutComponent, children: [
                    { path: '', component: HomePageComponent },
                    { path: 'login', component: LoginComponent },
                    { path: 'form-builder', component: FormBuilderPageComponent, canActivate: [AuthGuard] }
                ]
            }
        ]),
    ],
    exports: [RouterModule, LoginComponent],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor,  multi: true,},
        AuthService,
        AuthGuard]
})
export class AdminModule {
}

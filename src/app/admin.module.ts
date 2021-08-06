import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdminLayoutComponent} from "./components/admin-layout/admin-layout.component";
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {FormBuilderPageComponent} from "./components/form-builder-page/form-builder-page.component";
import {AccordionComponent} from "./components/accordion/accordion.component";
import {FormBuilderComponent} from "./components/form-builder/form-builder.component";
import {AvailableFieldsComponent} from "./components/available-fields/available-fields.component";
import {AuthGuard} from "./services/auth.guard";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {StoreModule} from "@ngrx/store";
import {FormReducer} from "./state/forms.reducers";


@NgModule({
  declarations: [
    LoginComponent,
    AdminLayoutComponent,
    FormBuilderPageComponent,
    AccordionComponent,
    FormBuilderComponent,
    AvailableFieldsComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', component: HomePageComponent},
          {path: 'login', component: LoginComponent},
          {path: 'form-builder', component: FormBuilderPageComponent, canActivate: [AuthGuard]}
        ]
      }
    ]),
    DragDropModule,
    CdkAccordionModule,
    StoreModule.forRoot({ formsB : FormReducer}),

  ],
  exports: [RouterModule, LoginComponent],
  providers: [AuthService, AuthGuard]
})
export class AdminModule{

}

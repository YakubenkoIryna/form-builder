import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./components/main-layout/main-layout.component";
import {HomePageComponent} from "./components/home-page/home-page.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '' ,component: HomePageComponent}
    ]
  },
  {
    path: 'admin', loadChildren: './admin.module#AdminModule'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {MainLayoutComponent} from "./components/main-layout/main-layout.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {AdminModule} from "./admin.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLayoutComponent,
    HomePageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  exports: [
    HeaderComponent,
    MainLayoutComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

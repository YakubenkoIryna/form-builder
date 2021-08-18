import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { reducers, metaReducers } from './reducers';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AdminModule } from './modules/admin.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AuthEffects } from './reducers/auth/auth.effects';

@NgModule({
    declarations: [
        AppComponent,
        MainLayoutComponent,
        HomePageComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(reducers, {
            metaReducers
        }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        EffectsModule.forRoot([AuthEffects]),
        AdminModule,
        StoreRouterConnectingModule.forRoot()
    ],
    providers: [],
    exports: [ MainLayoutComponent ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

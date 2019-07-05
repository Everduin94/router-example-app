import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';

import { environment } from '../environments/environment';
import { PageNotFoundComponent } from './outerComponents/page-not-found/page-not-found.component';
import { LoginComponent } from './outerComponents/login/login.component';
import { ShellComponent } from './outerComponents/shell/shell.component';
import { MainComponent } from './outerComponents/main/main.component';
import { FeedComponent } from './innerComponents/feed/feed.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    ShellComponent,
    MainComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FontAwesomeModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from '../environments/environment';
import { PageNotFoundComponent } from './outerComponents/page-not-found/page-not-found.component';
import { LoginComponent } from './outerComponents/login/login.component';
import { ShellComponent } from './outerComponents/shell/shell.component';
import { MainComponent } from './outerComponents/main/main.component';
import { MdToHtmlPipe } from './pipes/md-to-html.pipe';
import { FeedComponent } from './innerComponents/feed/feed.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { MomentsComponent } from './innerComponents/moments/moments.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    ShellComponent,
    MainComponent,
    MdToHtmlPipe,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    ReactiveFormsModule,
    FontAwesomeModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatSidenavModule } from "@angular/material";
import { OverlayModule } from "@angular/cdk/overlay";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AudioComponent } from './audio/audio.component';
import { VideoComponent } from './video/video.component';
import { MapComponent } from './map/map.component';
import { InfoComponent } from './info/info.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AudioComponent,
    VideoComponent,
    MapComponent,
    InfoComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
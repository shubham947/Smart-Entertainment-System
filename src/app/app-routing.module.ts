import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AudioComponent } from './audio/audio.component';
import { VideoComponent } from './video/video.component';
import { MapComponent } from './map/map.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'audio', component: AudioComponent },
  { path: 'video', component: VideoComponent },
  { path: 'map', component: MapComponent },
  { path: 'info', component: InfoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'logout', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

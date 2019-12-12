import { Component } from '@angular/core';
import { faSearch, faUserCircle, faCog, faBell, faBars } from "@fortawesome/free-solid-svg-icons";
import { faHome, faMapMarkedAlt, faInfo, faFilm } from "@fortawesome/free-solid-svg-icons";
import { faItunesNote } from "@fortawesome/free-brands-svg-icons";
import { validateVerticalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SES';
  faSearch = faSearch;
  faUserCircle = faUserCircle;
  faCog = faCog;
  faBell = faBell;
  faBars = faBars;

  notifications:string[] = ['kbdshcbzsbsbb validateVerticalPosition hvbvvvvvy', 'gvdsgv a vsvb', 'gvgb'];
  numNotification = this.notifications.length;
  menuOpened:boolean = true;

  faHome = faHome;
  faMapMarkedAlt = faMapMarkedAlt;
  faInfo = faInfo;
  faItunesNote = faItunesNote;
  faFilm = faFilm;

  tab = '';
  userDialogOpen:boolean = false;
  notificationDialogOpen:boolean = false;
  user:any = null;

}

import { Component, OnInit } from '@angular/core';
import { faSearch, faUserCircle, faCog, faBell, faBars } from "@fortawesome/free-solid-svg-icons";
import { faHome, faMapMarkedAlt, faInfo, faFilm } from "@fortawesome/free-solid-svg-icons";
import { faItunesNote } from "@fortawesome/free-brands-svg-icons";
import { Ticket } from './model/Ticket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SES';
  faSearch = faSearch;
  faUserCircle = faUserCircle;
  faCog = faCog;
  faBell = faBell;
  faBars = faBars;

  menuOpened:boolean = true;

  faHome = faHome;
  faMapMarkedAlt = faMapMarkedAlt;
  faInfo = faInfo;
  faItunesNote = faItunesNote;
  faFilm = faFilm;

  tab = '';
  userDialogOpen:boolean = false;
  notificationDialogOpen:boolean = false;
  ticket:Ticket;
  notifications:string[] = ['Login with your PNR for full features', 'Welcome to Smart Entertainment System'];
  numNotification = this.notifications.length;
  
  ngOnInit() {
    this.ticket = JSON.parse(sessionStorage.getItem('ticket'));
  }

  searchResults:string[] = [];
  searchDialogOpen:boolean = false;

  onKey(event: any) {
    this.searchResults.splice(0);

    if(event.target.value.length>0)
      this.searchResults.push(event.target.value);
      
    if(this.searchResults.length > 0){
      this.searchDialogOpen = true;
    } else {
      this.searchDialogOpen = false;
    }
  }

  playerOpen:boolean = true;
  closePlayer($event:boolean){
    this.playerOpen = $event;
  }

  clearSession() {
    sessionStorage.clear();
  }

}

import { Component, OnInit } from '@angular/core';
import { Ticket } from '../model/Ticket';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit{

  ticket:Ticket;
  childMode:boolean=false;

  childModeToggle(){
    this.childMode = !this.childMode;
    sessionStorage.setItem('childMode', JSON.stringify(this.childMode));
  }
  
  clearSession() {
    sessionStorage.clear();
  }

  ngOnInit() {
    this.ticket = JSON.parse(sessionStorage.getItem('ticket'));
  }
}

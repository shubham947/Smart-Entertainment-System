import { Component, OnInit } from '@angular/core';
import { Ticket } from '../model/Ticket';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  ticket:Ticket;

  constructor() { }

  ngOnInit() {
    this.ticket = JSON.parse(sessionStorage.getItem('ticket'));
  }

}

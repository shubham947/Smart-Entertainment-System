import { Component, OnInit } from '@angular/core';
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Ticket } from '../model/Ticket';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TicketService } from '../service/ticket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faSignInAlt = faSignInAlt;

  largeScreen:boolean;
  ticket: Ticket;
  
  loginForm: FormGroup;

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    if (window.innerWidth >= 992) { 
      this.largeScreen = true;
    }
    else {
      this.largeScreen = false;
    }

    this.loginForm = new FormGroup({
        no: new FormControl('', [Validators.required])
    });
  }

  login() {
    let no = this.loginForm.controls['no'].value;
    this.ticketService.getTicket(no).subscribe(
      (res: Ticket) => {
        sessionStorage.setItem('ticket', JSON.stringify(res));
        this.ticket = res;
    }, err => {

    });
  }
}

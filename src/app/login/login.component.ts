import { Component, OnInit } from '@angular/core';
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faSignInAlt = faSignInAlt;

  largeScreen:boolean;
  
  constructor() { }

  ngOnInit() {
    if (window.innerWidth >= 992) { 
      this.largeScreen = true;
    }
    else {
      this.largeScreen = false;
    }
  }

}

import { Component, Output, EventEmitter } from '@angular/core';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Media } from '../model/Media';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  faTimes = faTimes;
  media:Media;

  playerOpen:boolean;
  @Output() messageEvent = new EventEmitter<boolean>();
  
  closePlayer() {
    this.playerOpen = false;
    this.messageEvent.emit(this.playerOpen);
  }

}

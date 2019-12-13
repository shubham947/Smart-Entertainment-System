import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  videoName:string = 'Captain.Marvel.2019.1080p.mp4';
  nowPlaying:string='C:/Users/Shubham Kumar/Downloads/Movies/' + this.videoName;

}

import { Component, OnInit } from '@angular/core';
import { Media } from '../model/Media';
import { MediaService } from '../service/media.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  movies:Media[];

  constructor(private mediaService:MediaService) { }

  ngOnInit() {
    this.mediaService.filterByType('video').subscribe(
      (res:any) => {
        this.movies=res},
      (err) => {}
    )
  }

}

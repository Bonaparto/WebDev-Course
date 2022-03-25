import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.scss']
})
export class AlbumPhotosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.albumId = window.history.state.album.id;
  }

  albumId: number = 1;

}

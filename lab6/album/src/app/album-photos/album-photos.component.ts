import { Component, OnInit } from '@angular/core';
import photos from '../../assets/files/photos.json'

export interface Photo {
  title: string,
  url: string
}

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.scss']
})
export class AlbumPhotosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.photos = photos;
  }

  photos: Photo[] = [];

}

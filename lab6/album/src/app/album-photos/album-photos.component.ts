import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { HttpService } from '../album.service';
import { Photo } from '../interface/photo'

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.scss'],
  providers: [HttpService]
})
export class AlbumPhotosComponent implements OnInit {

  constructor(private httpService: HttpService, private location: Location) { }

  ngOnInit(): void {
    this.httpService.getPhotos().
    subscribe(
      (response: Photo[]) => this.photos = response,
      (error: any) => console.log(error)
    )
  }

  photos: Photo[] = [];

  onClickBack() {
    this.location.back();
  }
}

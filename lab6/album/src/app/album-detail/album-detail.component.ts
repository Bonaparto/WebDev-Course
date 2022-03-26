import { Component, OnInit } from '@angular/core';
import { HttpService } from '../album.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../interface/album'

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss'],
  providers: [HttpService]
})


export class AlbumDetailComponent implements OnInit {
  
  constructor(private httpService: HttpService, route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.httpService.getSelectedAlbum().
    subscribe(
      (response: Album) => this.album = response,
      (error: any) => console.log(error)
    );
  }
  
  album: Album = {
    userId: 1,
    id: 1,
    title: ''
  }

  newTitle: string = '';

  changeTitle(val: string) {
    this.album.title = val;
  }
}

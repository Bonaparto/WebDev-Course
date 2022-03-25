import { Component, OnInit } from '@angular/core';
import { HttpService } from '../album.service';

export interface Album {
  userId: number,
  id: number,
  title: string
}

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss'],
  providers: [HttpService]
})


export class AlbumDetailComponent implements OnInit {
  
  constructor(private httpService: HttpService) { 
  }

  albumsList: Album[] = []; 
  selectedAlbum: number = 0;

  ngOnInit(): void {
    this.httpService.getAlbums().subscribe((data: Album[]) => this.albumsList=data);   
    this.selectedAlbum = this.httpService.getAlbum();   
    console.log(this.selectedAlbum);
    
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

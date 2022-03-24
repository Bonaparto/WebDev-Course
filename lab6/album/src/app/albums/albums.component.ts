import { Component, OnInit } from '@angular/core';

import albums from '../../assets/files/albums.json';

export interface Album {
  userId: number,
  id: number,
  title: string
}

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  selectedAlbum: number = 0;
  albumsList: Album[] = albums; 

  removeAlbum(album: Object) {
    for(let i = 0; i < this.albumsList.length; ++i) {
      if(Object.is(this.albumsList[i], album)) {
        this.albumsList.splice(i, 1);
      }
    }
  }
}
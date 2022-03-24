import { Component, OnInit } from '@angular/core';

export interface Album {
  userId: number,
  id: number,
  title: string
}

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})


export class AlbumDetailComponent implements OnInit {
  
  constructor() { 
  }

  ngOnInit(): void {
    this.album = window.history.state.album || 
    {
      userId: 1,
      id: 1,
      title: ''
    };    
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

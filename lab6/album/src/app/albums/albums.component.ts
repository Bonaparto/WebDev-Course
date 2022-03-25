import { Component, OnInit } from '@angular/core';
import { HttpService } from '../album.service';

export interface Album {
  userId: number,
  id: number,
  title: string
}

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
  providers: [HttpService]
})
export class AlbumsComponent implements OnInit {
  
  constructor(private httpService: HttpService) { }
  
  ngOnInit(): void {
    this.httpService.getAlbums().subscribe((data: Album[]) => this.albumsList=data);   
    console.log(this.albumsList);
    
  }

  albumsList: Album[] = []; 

  removeAlbum(album: Object) {
    for(let i = 0; i < this.albumsList.length; ++i) {
      if(Object.is(this.albumsList[i], album)) {
        this.albumsList.splice(i, 1);
      }
    }
  }
  setAlbum(val: number) {
    this.httpService.setAlbum(val);    
  }
}
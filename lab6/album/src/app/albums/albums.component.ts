import { Component, OnInit } from '@angular/core';
import { HttpService } from '../album.service';
import { Album } from '../interface/album'

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
  }

  albumsList: Album[] = []; 

  selectAlbum(id: number) {
    this.httpService.setSelectedAlbum(id);
  }
    
  removeAlbum(album: Object) {
    this.httpService.delete('url', id);
    for(let i = 0; i < this.albumsList.length; ++i) {
      if(Object.is(this.albumsList[i], album)) {
        this.albumsList.splice(i, 1);
      }
    }
  }
}
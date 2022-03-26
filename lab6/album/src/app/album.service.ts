import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Album } from './interface/album'
import { Photo } from './interface/photo'

@Injectable()   
export class HttpService {

    constructor(private http: HttpClient){ }
        
    selectedAlbum: number = 1;

    getAlbums() : Observable<Album[]> {
        return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
    }

    getSelectedAlbum() : Observable<Album> {
        return this.http.get<Album>("https://jsonplaceholder.typicode.com/albums/" + this.getSelectedAlbumId() + '/');
    }

    getSelectedAlbumId() : number {
        return this.selectedAlbum;
    }

    getPhotos() : Observable<Photo[]> {
        return this.http.get<Photo[]>("https://jsonplaceholder.typicode.com/albums/" + this.getSelectedAlbumId() + "/photos");
    }

    setSelectedAlbum(album: number) {
        this.selectedAlbum = album;
    }
}
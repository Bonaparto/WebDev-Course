import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

export interface Album {
    userId: number,
    id: number,
    title: string
}

@Injectable()   
export class HttpService{

    constructor(private http: HttpClient){ }
    
    selectedAlbum: number = 0;
        
    getAlbums() : Observable<Album[]> {
        return this.http.get('assets/files/albums.json').pipe(map((data:any) => {
            let albumsList = data;
            return albumsList;
        }));
    }

    getAlbum() : number {
        console.log(this.selectedAlbum, 'kke');
        return this.selectedAlbum;
        // const albums = this.getAlbums();
        // return albums[i-1];
        // for(let i = 0; i < albums.length; ++i) {
        //     if(albums[i] === )
        // }

    }

    setAlbum(val: number): void {
        console.log(val, 'lol');
        this.selectedAlbum = val;
        console.log(this.selectedAlbum, 'lol');
    }
 
}
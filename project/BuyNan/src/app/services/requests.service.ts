import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from '../services/app.service';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient, private appservice: AppService) { }

  post(item: any, itemType: string): void {
    let body = {};
    console.log('post', itemType, item);
    // if (productType === 'Products') {
    //   body = {

    //   }
    // }

    // return this.http.post(`wtf`, body);
  };

  put(item: any, itemType: string): void {
    console.log('put', item, itemType);
  }

  delete(itemType: string, itemId: number): void {
    console.log('delete', itemType, itemId);
    this.appservice.goBack();
  }
}

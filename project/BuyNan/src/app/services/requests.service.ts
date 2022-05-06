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

  get(type: string) {
    return this.http.get(`${this.BASE_URL}/${type}`);
  }

  post(item: any) {
    let itemType = item.type;
    if (itemType === 'product') {
      itemType = 'products';
    } else if (itemType === 'category') {
      itemType = 'categories';
    } else {
      itemType = 'providers';
    }
    return this.http.post(`${this.BASE_URL}/${itemType}`, item);
  };

  put(item: any) {
    let itemType = item.type;
    if (itemType === 'product') {
      itemType = 'products';
    } else if (itemType === 'category') {
      itemType = 'categories';
    } else {
      itemType = 'providers';
    }
    return this.http.put(`${this.BASE_URL}/${itemType}/${item.id}`, item);
  }

  delete(item: any) {
    let itemType = item.type;
    if (itemType === 'product') {
      itemType = 'products';
    } else if (itemType === 'category') {
      itemType = 'categories';
    } else {
      itemType = 'providers';
    }
    this.appservice.goBack();
    return this.http.delete(`${this.BASE_URL}/${itemType}/${item.id}`, item.id);
  }

  getItemsByCategory(category_id) {
    return this.http.get(`${this.BASE_URL}/categories/${category_id}/products`);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.BASE_URL}/login`, {
      username,
      password
    })
  }

}

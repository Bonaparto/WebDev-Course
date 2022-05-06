import { Injectable } from '@angular/core';
import { RequestsService } from './requests.service';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {

  constructor(private requestsService: RequestsService) { }

  authorized: Boolean = false;
  BASE_URL = 'http://127.0.0.1:8000';

  login(item: any): void {
    this.requestsService.login(item.username, item.password).subscribe(res => {
      localStorage.setItem('token', res.token);
      this.authorized = true;
    }) 
  }

  logout(): void {
    localStorage.clear();
    this.authorized = false;
  }

  isAuthorized(): Boolean {
    return this.authorized;
  }
}

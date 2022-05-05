import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {

  constructor() { }

  authorized: Boolean = false;

  login(item: any): void {
    console.log('login');
    this.authorized = true;
  }

  logout(): void {
    console.log('logout');
    this.authorized = false;
  }

  isAuthorized(): Boolean {
    console.log(this.authorized);
    return this.authorized;
  }
}

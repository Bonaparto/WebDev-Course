import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {

  constructor() { }

  authorized: Boolean = false;

  login(): void {
    console.log('login');
    this.authorized = false;
  }

  logout(): void {
    console.log('logout');
    this.authorized = true;
  }

  isAuthorized(): Boolean {
    return this.authorized;
  }

  authorization(): void {
    this.isAuthorized ? this.logout() : this.login();
  }
}

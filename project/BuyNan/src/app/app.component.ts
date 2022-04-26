import { Component, OnInit } from '@angular/core';

import { login, logout, isAuthorized } from '../config/login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'BuyNan';
  activeButton = 'Products'
  searchInput: string = '';

  ngOnInit() {

  }

  onNavClick(buttonName: string) {
    if (buttonName === 'Products') {
      this.activeButton = 'Products'
    } else if (buttonName === 'Categories') {
      this.activeButton = 'Categories'
    } else if (buttonName === 'Providers') {
      this.activeButton = 'Providers'
    } else {
      isAuthorized() ? login() : logout();
    }
  }

  isButtonActive(buttonName: string) {
    return this.activeButton === buttonName;
  }

  getTextForLogin() : string {
    return isAuthorized() ? 'Logout' : 'Login';
  }

  checkInput() {
    console.log(this.searchInput);
  }

}

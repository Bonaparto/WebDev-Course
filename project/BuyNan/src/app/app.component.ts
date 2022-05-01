import { Component, OnInit } from '@angular/core';
import { Item, Product, Provider } from './types/index' 
// import { ActivatedRoute, relativeTo } from '@angular/router';

import { login, logout, isAuthorized } from '../config/login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'BuyNan';

  activeButton: string = 'Products'
  searchInput: string = '';

  products: Product[] = [
    {
      type: 'product',
      id: 0,
      name: 'test',
      price: 1000,
      provider: 'Bodum',
      src: 'products/lays'
    },
    {
      type: 'product',
      id: 1,
      name: 'test',
      price: 1000,
      provider: 'Bodum',
      src: 'products/lays'
    },
    {
      type: 'product',
      id: 2,
      name: 'test',
      price: 1000,
      provider: 'Bodum',
      src: 'products/lays'
    },
    {
      type: 'product',
      id: 3,
      name: 'test',
      price: 1000,
      provider: 'Bodum',
      src: 'products/lays'
    },
    {
      type: 'product',
      id: 4,
      name: 'test',
      price: 1000,
      provider: 'Bodum',
      src: 'products/lays'
    },
    {
      type: 'product',
      id: 5,
      name: 'test',
      price: 1000,
      provider: 'Bodum',
      src: 'products/lays'
    },
    {
      type: 'product',
      id: 5,
      name: 'test',
      price: 1000,
      provider: 'Bodum',
      src: 'products/lays'
    },
    {
      type: 'product',
      id: 5,
      name: 'test',
      price: 1000,
      provider: 'Bodum',
      src: 'products/lays'
    },
    {
      type: 'product',
      id: 5,
      name: 'test',
      price: 1000,
      provider: 'Bodum',
      src: 'products/lays'
    },
  ];

  categories: Item[] = [
    {
      type: 'category',
      id: 0,
      name: 'testCategory',
      src: 'lays'
    },
    {
      type: 'category',
      id: 1,
      name: 'testCategory',
      src: 'lays'
    },
    {
      type: 'category',
      id: 2,
      name: 'testCategory',
      src: 'lays'
    },
    {
      type: 'category',
      id: 3,
      name: 'testCategory',
      src: 'lays'
    },
  ];

  providers: Provider[] = [];
  items: Item[] = this.products;

  ngOnInit() {}

  // constructor(route: ActivatedRoute) {}

  onNavClick(buttonName: string) {
    if (buttonName === 'Products') {
      this.activeButton = 'Products';
      this.items = this.products;
    } else if (buttonName === 'Categories') {
      this.activeButton = 'Categories';
      this.items = this.categories;
    } else if (buttonName === 'Providers') {
      this.activeButton = 'Providers';
      this.items = this.providers;
    } else {
      isAuthorized() ? login() : logout();
    }
  }

  openItemDetails(item: any) {
    console.log(item);  
  }

  isButtonActive(buttonName: string) {
    return this.activeButton === buttonName;
  }

  getTextForLogin() : string {
    return isAuthorized() ? 'Logout' : 'Login';
  }

}

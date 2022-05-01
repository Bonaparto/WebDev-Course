import { Injectable } from '@angular/core';
import { AuthorizationService } from './authorization.service';
import { Item, Product, Provider } from './types/index' ;

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private authorizationService: AuthorizationService) { }

  activeButton: string = 'Products'

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
      src: 'categories/vegetables'
    },
    {
      type: 'category',
      id: 1,
      name: 'testCategory',
      src: 'categories/vegetables'
    },
    {
      type: 'category',
      id: 2,
      name: 'testCategory',
      src: 'categories/vegetables'
    },
    {
      type: 'category',
      id: 3,
      name: 'testCategory',
      src: 'categories/vegetables'
    },
    {
      type: 'category',
      id: 4,
      name: 'testCategory',
      src: 'categories/vegetables'
    },
    {
      type: 'category',
      id: 5,
      name: 'testCategory',
      src: 'categories/vegetables'
    },
    {
      type: 'category',
      id: 6,
      name: 'testCategory',
      src: 'categories/vegetables'
    },
    {
      type: 'category',
      id: 7,
      name: 'testCategory',
      src: 'categories/vegetables'
    },
    {
      type: 'category',
      id: 8,
      name: 'testCategory',
      src: 'categories/vegetables'
    },
    {
      type: 'category',
      id: 9,
      name: 'testCategory',
      src: 'categories/vegetables'
    },
    {
      type: 'category',
      id: 10,
      name: 'testCategory',
      src: 'categories/vegetables'
    },
  ];

  providers: Provider[] = [
    {
      type: 'provider',
      id: 0,
      name: 'testProvider',
      src: '',
      email: 'blabla@gmail.com'
    },
    {
      type: 'provider',
      id: 1,
      name: 'testProvider',
      src: '',
      email: 'blabla@gmail.com'
    },
    {
      type: 'provider',
      id: 2,
      name: 'testProvider',
      src: '',
      email: 'blabla@gmail.com'
    },
    {
      type: 'provider',
      id: 3,
      name: 'testProvider',
      src: '',
      email: 'blabla@gmail.com'
    },
    {
      type: 'provider',
      id: 4,
      name: 'testProvider',
      src: '',
      email: 'blabla@gmail.com'
    },
    {
      type: 'provider',
      id: 5,
      name: 'testProvider',
      src: '',
      email: 'blabla@gmail.com'
    },
  ];
  items: Item[] = this.products;

  setActiveList(type: string) {
    this.activeButton = type;
    if(type === 'Authorization') {
      this.authorizationService.authorization();
    } else {
      if(type === 'Products') this.items = this.products;
      if(type === 'Categories') this.items = this.categories;
      if(type === 'Providers') this.items = this.providers;
      // console.groupCollapsed(
    }
    console.log(this.items);
  }

  getItems(): Item[] {
    return this.items;
  }

  getActiveButton(): string {
    return this.activeButton;
  }

}

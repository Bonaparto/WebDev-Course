import { Injectable } from '@angular/core';
import { AuthorizationService } from './authorization.service';
import { Item, Product, Provider } from '../types/index' ;

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private authorizationService: AuthorizationService) { }

  activeButton: string = 'Products'
  modalActive: Boolean = false;
  modalType: string = '';

  products: Product[] = [
    {
      type: 'product',
      id: 0,
      name: 'test',
      price: 1000,
      provider: 'testProvider',
      category: 'testCategory',
      src: 'products/lays'
    },
    {
      type: 'product',
      id: 1,
      name: 'test',
      price: 1000,
      provider: 'testProvider',
      category: 'testCategory',
      src: 'products/lays'
    },
    {
      type: 'product',
      id: 2,
      name: 'test',
      price: 1000,
      provider: 'testProvider',
      category: 'testCategory',
      src: 'products/lays'
    },
    {
      type: 'product',
      id: 3,
      name: 'test',
      price: 1000,
      provider: 'testProvider',
      category: 'testCategory',
      src: 'products/lays'
    },
    {
      type: 'product',
      id: 4,
      name: 'test',
      price: 1000,
      provider: 'testProvider',
      category: 'testCategory',
      src: 'products/lays'
    },
    {
      type: 'product',
      id: 5,
      name: 'test',
      price: 1000,
      provider: 'testProvider',
      category: 'testCategory',
      src: 'products/lays'
    },
    {
      type: 'product',
      id: 5,
      name: 'test',
      price: 1000,
      provider: 'testProvider',
      category: 'testCategory',
      src: 'products/lays'
    },
    {
      type: 'product',
      id: 5,
      name: 'test',
      price: 1000,
      provider: 'testProvider',
      category: 'testCategory',
      src: 'products/lays'
    },
    {
      type: 'product',
      id: 5,
      name: 'test',
      price: 1000,
      provider: 'testProvider',
      category: 'testCategory',
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
  item: Item = {
    id: null,
    type: '',
    name: '',
    src: ''
  };

  isModalActive(): Boolean {
    return this.modalActive;
  }

  openModal(type: string): void {
    this.setModalState(true);
    this.modalType = type;
  }

  setModalState(state: Boolean): void {
    this.modalActive = state;
  }

  setActiveList(type: string) {
    this.activeButton = type;
    if(type === 'Authorization') {
      this.authorizationService.authorization();
    } else {
      if(type === 'Products') this.items = this.products;
      if(type === 'Categories') this.items = this.categories;
      if(type === 'Providers') this.items = this.providers;
    }
  }

  setActiveItem(item: Item) {
    this.item = item;
  }

  getItems(): Item[] {
    return this.items;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getItem(): Item {
    return this.item;
  }

  getActiveButton(): string {
    return this.activeButton;
  }

  getModalType(): string {
    return this.modalType;
  }

}

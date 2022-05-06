import { Injectable } from '@angular/core';
import { Item, Product, Provider } from '../types/index' ;
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _location: Location) { }

  activeButton: string = 'Products'
  modalActive: Boolean = false;
  modalType: string = '';

  products: Product[] = [];

  categories: Item[] = [];

  providers: Provider[] = [];
  items: any[] = this.products;
  item: Item = {
    id: null,
    type: '',
    name: '',
    src: ''
  };

  loading: Boolean = false;

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
  }

  setActiveItem(item: Item) {
    this.item = item;
  }

  setItems(arr) {
    this.items = arr;
  }

  setProducts(arr) {
    this.products = arr;
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

  deleteItem(id) {
    this.items = this.items.filter(it => it.id !== id);
  }

  addItem(item) {
    this.items.push(item);
    console.log(this.items);
  }

  goBack() {
    this._location.back();
  }

  setLoading(state: Boolean) {
    this.loading = state;
  }

  isLoaded() {
    return this.loading;
  }

}

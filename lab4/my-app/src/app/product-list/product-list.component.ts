import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../app.component';

export interface Item {
  img: string,
  name: string,
  description: string,
  rating: string,
  category: string,
  shareLink: string,
  link: string,
  likes: number,
  isShown: Boolean
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() category: Category = {
    name: '',
    img: '',
    isActive: false,
    isChoosen: false
  }

  @Input() items: Item[] = []

  @Output() newCategoryEvent = new EventEmitter<string>();

  makeActive(val: string) {
    this.newCategoryEvent.emit(val);
  }
}
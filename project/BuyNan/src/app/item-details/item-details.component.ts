import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { RequestsService } from '../services/requests.service';
import { Product } from '../types';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  constructor(private service: AppService, private requestsService: RequestsService) { }
  
  item: any;
  itemsList: Product[];

  ngOnInit(): void {
    this.item = this.service.getItem();
    if(this.item.type === 'category') {
      this.itemsList = this.getItemsByCategory(this.item.name);
    }
  }

  getItemsByCategory(category: string): Product[] {
    const list: Product[] = this.service.getProducts();
    const res = list.filter(item => item.category === category);
    return res;
  }

  openModal(type: string) {
    this.service.openModal(type);
  }

  deleteItem() {
    this.requestsService.delete(this.item.type, this.item.id);
  }
}

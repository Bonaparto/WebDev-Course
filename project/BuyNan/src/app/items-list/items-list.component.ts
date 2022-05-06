import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Item } from '../types';
import { RequestsService } from '../services/requests.service';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  constructor(private service: AppService, private requestsService: RequestsService) { }

  items;

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    let type = this.service.getActiveButton();
    if(type === 'Products') {
      this.requestsService.get('products').subscribe(data => {
        this.items = data;
      })
    }
    if(type === 'Categories') {
      this.requestsService.get('categories').subscribe(data => {
        this.items = data;
      })
    }
    if(type === 'Providers') {
      this.requestsService.get('providers').subscribe(data => {
        this.items = data;
      })
    }
  }

  getActiveButton(): string {
    return this.service.getActiveButton();
  }
}

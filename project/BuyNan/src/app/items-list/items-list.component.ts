import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Item } from '../types';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  constructor(private service: AppService) { }

  items: Item[] = [];

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.items = this.service.getItems();
  }

  getActiveButton(): string {
    return this.service.getActiveButton();
  }
}

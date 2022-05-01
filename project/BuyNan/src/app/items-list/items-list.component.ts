import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Item } from '../types';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  constructor(private service: AppService) { }

  @Input()

  items: Item[] = [];

  ngOnInit(): void {
    this.getItems();
  }

  openItemDetails(item: any) {
    console.log(item);
  }

  getItems(): void {
    this.items = this.service.getItems();
  }
}

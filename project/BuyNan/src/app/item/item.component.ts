import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Item } from '../types';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {

  @Input() item: any;

  constructor(private service: AppService) { }

  ngOnInit(): void {
  }

  openItemDetails(item: Item) {
    this.service.setActiveItem(item);
  }

  isProduct(): Boolean {
    return this.item.type === 'product';
  }

}

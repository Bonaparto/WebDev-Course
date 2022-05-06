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
  itemsList;

  ngOnInit(): void {
    this.item = this.service.getItem();
    if(this.item.type === 'category') {
      console.log(this.itemsList);
      this.requestsService.getItemsByCategory(this.item.id).subscribe(data => {
        this.itemsList = data
      });
    }
  }

  openModal(type: string) {
    this.service.openModal(type);
  }

  deleteItem() {
    this.requestsService.delete(this.item).subscribe(res => {
      console.log(res);
    });
    this.service.deleteItem(this.item.id);
  }
}

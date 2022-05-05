import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private service: AppService, private requestsService: RequestsService) { }

  item: any = {};
  fieldsList: any[] = [
    'id',
    'type',
    'name',
    'src',
  ];
  type: string;

  ngOnInit(): void {
    this.type = this.service.getModalType();
    if (this.type === 'Edit') {
      this.item = this.service.getItems()[0];
      this.fieldsList = Object.keys(this.item);
    } else {
      const itemType = this.service.getActiveButton();
      console.log(itemType);
      this.item['type'] = 'category';
      if (itemType === 'Products') {
        this.fieldsList = this.fieldsList.concat([
          'price',
          'provider',
          'category'
        ]);  
        this.item['type'] = 'product';
      } else if (itemType === 'Providers') {
        this.fieldsList.push('email'); 
        this.item['type'] = 'provider';
      }
      console.log(this.fieldsList);
      this.fieldsList.forEach(field => {
        if (field !== 'type')
        this.item[field] = null;
      });
    } 
    console.log(this.item, this.fieldsList);
  }

  closeModal() {
    this.service.setModalState(false);
  }

  onSubmit() {
    if (this.type === 'Create') {
      this.requestsService.post(this.item, this.item.type);
    } else {
      this.requestsService.put(this.item, this.item.type);
    }
    console.log('wtf');
    // if (this.type === 'Edit') {
    //   this.service.
    // }
  }

}

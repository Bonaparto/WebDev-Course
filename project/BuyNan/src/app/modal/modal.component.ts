import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { RequestsService } from '../services/requests.service';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private service: AppService, private requestsService: RequestsService, private authService: AuthorizationService) { }

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
      this.item = this.service.getItem();
      this.fieldsList = Object.keys(this.item);
    } else if (this.type === 'auth') {
      this.type = 'auth';
      this.item = {
        type: this.type,
        username: '',
        password: ''
      };
    } else {
      const itemType = this.service.getActiveButton();
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
      this.fieldsList.forEach(field => {
        if (field !== 'type')
        this.item[field] = null;
      });
    } 
  }

  closeModal() {
    this.service.setModalState(false);
  }

  onSubmit() {
    if (this.type === 'Create') {
      this.requestsService.post(this.item).subscribe(res => {
        this.service.addItem(res);
      }); 
      console.log('items1', this.service.getItems());
    } else if (this.type === 'auth') {
      this.authService.login(this.item);
    } else {
      this.requestsService.put(this.item).subscribe(res => {
        this.item = res;
      }); 
    }
    this.closeModal();
  }

}

import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { AppService } from '../app.service';
import { Item } from '../types';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private service: AppService) { }

  item: any;
  fieldsList: any[];
  type: string;

  ngOnInit(): void {
    this.item = this.service.getItems()[0];
    this.fieldsList = Object.keys(this.item);
    this.type = this.service.getModalType();
  }

}

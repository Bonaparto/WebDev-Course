import { Component, OnInit } from '@angular/core';
import { Company } from '../models'
import { CompanyServiceService } from '../company-service.service'

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  companies: Company[] = [];

  constructor(private companyService: CompanyServiceService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.companyService.getCompanies().subscribe( (data) => {
      console.log(data);  
    }); 
  }

}

import { Component, OnInit } from '@angular/core';
import { Company } from '../models'
import { CompanyServiceService } from '../company-service.service'

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  name: string = ''
  city: string = ''
  address: string = ''
  description: string = ''
  id: number = 0
  company: Company = {
    "name": '',
    "city": '',
    "address": '',
    "description": '',
    "id": 0,
  }

  companies: Company[] = [];

  constructor(private companyService: CompanyServiceService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.companyService.getCompanies().subscribe( (data) => {
      this.companies = data; 
    }); 
  }

  postCompany() {
    this.companyService.postCompany(this.company).subscribe( (data) => {
      console.log(data);
    })
  }

  selectCompany(company_id: number) {
    this.companyService.setSelectedCompany(company_id)
  }

}

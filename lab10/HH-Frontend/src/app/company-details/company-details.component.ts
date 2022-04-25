import { Component, OnInit } from '@angular/core';
import { Company } from '../models'
import { CompanyServiceService } from '../company-service.service'

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {

  company: Company = {
    'id': 0,
    'name': '',
    'description': '',
    'city': '',
    'address': ''
  };

  constructor(private companyService: CompanyServiceService) { }

  ngOnInit(): void {
    this.getCompany()
  }

  getCompany() {
    this.companyService.getCompany().subscribe((data: Company) => this.company = data)
  }

  putCompany() {
    this.companyService.putCompany(this.company).subscribe((data: Company) => this.company = data)
  }

  deleteCompany() {
    this.companyService.deleteCompany(this.company.id)
  }
}

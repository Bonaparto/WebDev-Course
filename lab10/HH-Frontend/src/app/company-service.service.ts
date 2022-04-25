import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company, Vacancy, LoginResponse } from './models'
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  BASE_URL = 'http://127.0.0.1:8000'

  selectedCompany: number = 0

  constructor(private http: HttpClient, private _location: Location) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.BASE_URL}/api/companies`)
  }

  postCompany(company: Company) {
    const body = {
      name: company.name, 
      city: company.city, 
      address: company.address, 
      description: company.description, 
      id: company.id
    }

    return this.http.post(`${this.BASE_URL}/api/companies`, body)
  }

  putCompany(company: Company) {
    const body = {
      name: company.name, 
      city: company.city, 
      address: company.address, 
      description: company.description, 
      id: company.id
    }

    return this.http.put<Company>(`${this.BASE_URL}/api/companies/${company.id}`, body)
  }

  getCompany(): Observable<Company> {
    return this.http.get<Company>(`${this.BASE_URL}/api/companies/${this.selectedCompany}`)
  }
  
  deleteCompany(company_id: number) {
    return this.http.delete(`${this.BASE_URL}/api/companies/${company_id}`)
  }

  setSelectedCompany(company_id: number) {
    this.selectedCompany = company_id
  }

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies`)
  }

  login(username: String, password: String): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    })
  }

  returnBack() {
    this._location.back();
  }
}

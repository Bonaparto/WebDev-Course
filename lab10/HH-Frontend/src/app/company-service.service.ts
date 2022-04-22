import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company, Vacancy, LoginResponse } from './models'

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  BASE_URL = 'http://127.0.0.1:8000'

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.BASE_URL}/api/companies`)
  }

  login(username: String, password: String): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    })
  }
}

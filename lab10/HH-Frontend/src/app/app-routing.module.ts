import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component'
import { CompanyDetailsComponent } from './company-details/company-details.component';

const routes: Routes = [
  { path: 'api/companies', component: CompanyComponent },
  { path: 'api/companies/:company_id', component: CompanyDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './items-list/items-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: AppComponent}, 
  { path: 'products', component: ItemsListComponent}, 
  { path: 'categories', component: ItemsListComponent}, 
  { path: 'providers', component: AppComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

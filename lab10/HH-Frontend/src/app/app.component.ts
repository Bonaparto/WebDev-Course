import {Component, OnInit} from '@angular/core';
import {CompanyServiceService} from "./company-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'servicesGroup2';

  logged = false;

  username: string = '';
  password: string = '';

  constructor(private CompanyServiceService: CompanyServiceService) {}

  ngOnInit(){
    let token = localStorage.getItem('token');
    if (token){
      this.logged = true;
    }
  }

  login(){
    this.CompanyServiceService.login(this.username, this.password)
      .subscribe(res => {
        console.log(this.username, this.password);
        localStorage.setItem('token', res.token); 

        this.logged = true;

        this.username = '';
        this.password = '';
      })
  }

  logout(){
    localStorage.clear();
    this.logged = false;
  }

}
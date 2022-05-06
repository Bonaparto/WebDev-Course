import {Component, OnInit} from '@angular/core';
import {CompanyServiceService} from "./company-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  logged = false;

  username: string = '';
  password: string = '';

  constructor(private CompanyServiceService: CompanyServiceService) {}

  ngOnInit() {
    let token = localStorage.getItem('token');
    if (token){
      this.logged = true;
    }
  }

  login() {
    this.CompanyServiceService.login(this.username, this.password)
      .subscribe(res => {
        localStorage.setItem('token', res.token); 

        this.logged = true;

        this.username = '';
        this.password = '';
      })
  }

  logout() {
    localStorage.clear();
    this.logged = false;
  }

  returnBack() {
    this.CompanyServiceService.returnBack()
  }

}
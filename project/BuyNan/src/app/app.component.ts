import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { AuthorizationService } from './services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  ngOnInit() {}
  
  constructor(
    private service: AppService, 
    private authorizationSevice: AuthorizationService) {}
    
  title: string = 'BuyNan';

  searchInput: string = '';

  onNavClick(buttonName: string): void {
    this.service.setActiveList(buttonName);
  }

  isButtonActive(buttonName: string): Boolean {
    return this.service.activeButton === buttonName;
  }

  isModalActive(): Boolean {
    return this.service.isModalActive();
  }

  getTextForLogin() : string {
    return this.authorizationSevice.isAuthorized() ? 'Logout' : 'Login';
  }

  openModal(type: string): void {
    this.service.openModal(type);
  }

}

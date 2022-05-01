import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { AuthorizationService } from './authorization.service';
import { Item } from './types/Item';
// import { ActivatedRoute, relativeTo } from '@angular/router';

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

  onNavClick(buttonName: string) {
    console.log('button', buttonName);
    this.service.setActiveList(buttonName);
  }

  isButtonActive(buttonName: string) {
    return this.service.activeButton === buttonName;
  }

  getTextForLogin() : string {
    return this.authorizationSevice.isAuthorized() ? 'Logout' : 'Login';
  }

}

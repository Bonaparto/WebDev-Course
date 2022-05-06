import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { AuthorizationService } from './services/authorization.service';
import { RequestsService } from './services/requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    private service: AppService, 
    private authorizationService: AuthorizationService,
    private requestsService: RequestsService) {}

  ngOnInit() {}
  title: string = 'BuyNan';

  searchInput: string = '';
  loading: Boolean = false;

  onNavClick(buttonName: string): void {
    if (buttonName === 'Authorization') {
      if (this.authorizationService.isAuthorized()) {
        this.authorizationService.logout()
      } else {
        this.service.openModal('auth');
      }
    } else {
      this.service.setActiveList(buttonName);
    }
  }

  isButtonActive(buttonName: string): Boolean {
    return this.service.activeButton === buttonName;
  }

  isModalActive(): Boolean {
    return this.service.isModalActive();
  }

  getTextForLogin() : string {
    return this.authorizationService.isAuthorized() ? 'Logout' : 'Login';
  }

  openModal(type: string): void {
    this.service.openModal(type);
  }

}

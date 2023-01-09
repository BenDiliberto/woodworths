import { Component } from '@angular/core';
import {LoginService} from "../login/service/login.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  loginService: LoginService;
  constructor(loginService: LoginService) {
    this.loginService = loginService;
  }

  isLoggedIn() {
    console.log(this.loginService.loggedIn);
    return this.loginService.loggedIn;
  }

  logout() {
    this.loginService.logout();
  }
}

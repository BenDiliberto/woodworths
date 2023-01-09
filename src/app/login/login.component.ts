import { Component } from '@angular/core';
import { LoginService } from "./service/login.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {routerModule} from "@angular/core/schematics/migrations/router-link-with-href/util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router) {
  }

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  login() {
    this.loginService.doesUserExist(this.form.value.username, this.form.value.password);
    if (this.loginService.loggedIn) {
      this.router.navigate(['/']);
    }
  }

  register() {
    this.loginService.register(this.form.value.username, this.form.value.password);
    if (this.loginService.loggedIn) {
      this.router.navigate(['/']);
    }
  }
}

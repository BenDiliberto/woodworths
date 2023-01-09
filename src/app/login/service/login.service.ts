import { Injectable } from '@angular/core';
import {User} from "../domain/User";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users: User[] = [new User('customer', 'pass'), new User('office', 'pass')];

  loggedIn: boolean = false;
  loggedInUser: User | null = null;

  constructor() { }

  register(username: string | null | undefined, password: string | null | undefined) {
    let newUser = new User(username, password);
    this.users.push(newUser);
    this.loggedIn = true;
    this.loggedInUser = newUser;
  }

  doesUserExist(username: string | null | undefined, password: string | null | undefined) {
    for (let user of this.users) {
      if (user.username == username && user.password == password) {
        this.loggedIn = true;
        this.loggedInUser = user;
      }
    }
  }

  logout() {
    this.loggedIn = false;
    this.loggedInUser = null;
  }
}

import { Component } from '@angular/core';
import {StoreService} from "./service/store.service";
import {LoginService} from "../login/service/login.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  constructor(private storeService: StoreService, public loginService: LoginService) {
  }

  getItems() {
    return this.storeService.getItems();
  }

  getBasket() {
    return this.storeService.getBasket();
  }

  getDiscount() {
    return this.storeService.getBasketTotal() * 0.2;
  }

  getBasketTotal() {
    return this.storeService.getBasketTotal();
  }

  resetBasket() {
    this.storeService.resetBasket();
  }

  addItemToBasket(itemId: string) {
    this.storeService.addItemToBasket(itemId);
  }

  checkout() {
    this.storeService.resetBasket();
  }
}

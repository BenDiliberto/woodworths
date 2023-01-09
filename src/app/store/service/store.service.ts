import { Injectable } from '@angular/core';
import {StoreItem} from "../domain/StoreItem";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  items: StoreItem[] = [
    new StoreItem("1", "Stick", 0.80, "https://www.museumofplay.org/app/uploads/2021/08/stick_0.png"),
    new StoreItem("2", "Branch", 2.10, "https://www.shutterstock.com/image-photo/dead-tree-isolated-on-white-260nw-1197700420.jpg"),
    new StoreItem("3", "Tree", 80.50, "https://i.etsystatic.com/14083564/r/il/8a5fbf/2234706600/il_fullxfull.2234706600_b7kq.jpg")
  ];

  basket: StoreItem[] = [];

  constructor() { }

  getItems(): StoreItem[] {
    return this.items;
  }

  getBasket(): StoreItem[] {
    return this.basket;
  }

  getBasketTotal(): number {
    let total: number = 0.00;
    this.getBasket().forEach((item) => total = total + item.price);
    return total;
  }

  resetBasket() {
    this.basket = [];
  }

  removeItemFromBasket(itemId: string) {
    for (let index = 0; index < this.basket.length; index++) {
      if (this.basket[index].id === itemId) {
        delete this.basket[index];
        break;
      }
    }

  }

  addItemToBasket(itemId: string) {
    for (let item of this.items) {
      if (item.id == itemId) {
        this.basket.push(item);
      }
    }
  }
}

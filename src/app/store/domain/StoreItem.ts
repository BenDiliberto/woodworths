export class StoreItem {
  id: string
  name: string
  price: number
  imageUrl: string

  constructor(id: string, name: string, price: number, imageUrl: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}

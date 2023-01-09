import {FormControl, ɵValue} from "@angular/forms";

export class ContactRequest {
  name: string
  email: string
  telephone: string
  subject: string
  message: string

  constructor(name: any, email: any, telephone: any, subject: any, message: any) {
    this.name = name;
    this.email = email;
    this.telephone = telephone;
    this.subject = subject;
    this.message = message;
  }
}

import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContactRequest} from "./domain/ContactRequest";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  form = new FormGroup({
    telephone: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(11), Validators.maxLength(11)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    name: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.maxLength(200), Validators.required]),
  });

  submit() {
    var contactRequest: ContactRequest = new ContactRequest(this.form.value.name, this.form.value.email, this.form.value.telephone, this.form.value.subject, this.form.value.message);
    console.log(contactRequest);
  }
}

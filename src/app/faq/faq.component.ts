import {Component, OnChanges} from '@angular/core';
import {FAQ} from "./domain/FAQ";
import {FaqService} from "./service/FaqService";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {

  faqService = new FaqService();
  filteredFaqs: FAQ[] = this.faqService.faqs;

  onSearchChange(event: any) {
    const filteredFaqs: FAQ[] = [];
    const sanitisedInput = event.target.value.toLowerCase()
    this.faqService.faqs.forEach(function (faq) {
      if (faq.question.toLowerCase().includes(sanitisedInput) || faq.answer.toLowerCase().includes(sanitisedInput)) {
        filteredFaqs.push(faq);
      }
    });
    this.filteredFaqs = filteredFaqs;
  }

}

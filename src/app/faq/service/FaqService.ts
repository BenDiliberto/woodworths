import {FAQ} from "../domain/FAQ";

export class FaqService {
  faqs: FAQ[] = [
    new FAQ("What's the difference between a stick and a twig?", "Twigs have leaves attached to them. Sticks have twigs attached to them."),
    new FAQ("Test", "Answer")
  ];
}

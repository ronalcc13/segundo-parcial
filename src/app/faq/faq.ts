import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule], // Esto es obligatorio para ngFor/ngIf
  templateUrl: './faq.html',
  styleUrls: ['./faq.css']
})
export class FaqComponent {
  faqItems = [
    { question: 'What is CryptoFlow?', answer: 'CryptoFlow is a professional crypto trading platform.' },
    { question: 'Is there a free trial?', answer: 'Yes, you can try all features with a 14-day free trial.' },
    { question: 'Can I cancel anytime?', answer: 'Absolutely, no commitments required.' },
    { question: 'How secure is the platform?', answer: 'We use top-level encryption and secure wallets.' },
    { question: 'Which cryptocurrencies are supported?', answer: 'Bitcoin, Ethereum, and more major coins.' },
  ];

  openIndex: number | null = null;

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}

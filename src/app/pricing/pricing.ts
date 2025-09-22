import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.html',
  styleUrls: ['./pricing.css']
})
export class Pricing {
  billingCycle: 'monthly' | 'annual' = 'monthly';

  pricingPlans = [
    {
      name: 'Starter',
      price: { monthly: '$0', annual: '$0' },
      description: 'Ideal for beginners.',
      features: ['Basic analytics', 'Demo trading', 'Community support'],
      buttonText: 'Get Started'
    },
    {
      name: 'Pro',
      price: { monthly: '$29', annual: '$279' },
      description: 'For active traders.',
      features: ['Advanced analytics', 'Real-time signals', 'Priority support'],
      highlighted: true,
      buttonText: 'Start Trading'
    },
    {
      name: 'Enterprise',
      price: { monthly: '$99', annual: '$948' },
      description: 'For institutions.',
      features: ['Custom analytics', 'Dedicated account manager', 'API access'],
      buttonText: 'Contact Sales'
    }
  ];

  setBillingCycle(cycle: 'monthly' | 'annual') {
    this.billingCycle = cycle;
  }
}

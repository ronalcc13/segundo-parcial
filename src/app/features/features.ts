import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-features',
  standalone: true,
  templateUrl: './features.html',
  styleUrls: ['./features.css'],
  imports: [CommonModule]
})
export class Features {
  features = [
    { icon: 'activity', title: 'Real-time Analytics', description: 'Instant market insights.' },
    { icon: 'lock', title: 'Secure Wallet', description: 'Top-level security for your assets.' },
    { icon: 'zap', title: 'Fast Transactions', description: 'Execute trades in milliseconds.' },
    { icon: 'compass', title: 'Guided Navigation', description: 'Easy-to-use interface.' },
    { icon: 'lineChart', title: 'Advanced Charts', description: 'Professional charting tools.' },
    { icon: 'shield', title: 'Trusted Platform', description: 'Reliable and secure.' },
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Features } from '../features/features';
import { Faq } from '../faq/faq';
import { Pricing } from './../pricing/pricing';
@Component({
  selector: 'app-ui',
  imports: [CommonModule, Features, Faq, Pricing],
  templateUrl: './ui.html',
  styleUrl: './ui.css'
})
export class Ui {

}

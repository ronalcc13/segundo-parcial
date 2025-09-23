import { Component } from '@angular/core';
import { NotificationService } from '../services/notification';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private notifService: NotificationService) {}
  permitir() {
    this.notifService.requestPermission().then((perm) => {
      if (perm === 'granted') {
        alert('Permiso concedido.');
      } else {
        alert('Permiso denegado.');
      }
    });
  }

  probar() {
    this.notifService.showNotification('Hola', {
      body: 'Esta es una notificación de prueba.',
      icon: 'icons/icon-192x192.png',
    });
  }
}

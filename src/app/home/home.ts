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

  /** Pedir permiso para notificaciones nativas */
  permitir() {
    this.notifService.requestPermission().then((perm: NotificationPermission) => {
      if (perm === 'granted') {
        this.notifService.show('Permiso concedido', 'Ahora puedes recibir notificaciones', 'success');
      } else {
        this.notifService.show('Permiso denegado', 'No podrás recibir notificaciones', 'error');
      }
    });
  }

  /** Mostrar notificación nativa */
  probar() {
    this.notifService.showNotification('Hola', {
      body: 'Esta es una notificación de prueba.',
      icon: 'icons/icon-192x192.png',
    });
  }

  /** Mostrar alerta SweetAlert2 */
  alertaSweet() {
    this.notifService.success('¡Esto es SweetAlert2!');
  }

  /** Confirmación con SweetAlert2 */
  async confirmar() {
    const ok = await this.notifService.confirm('¿Eliminar?', 'Esta acción no se puede deshacer.');
    if (ok) this.notifService.success('Registro eliminado');
  }
}

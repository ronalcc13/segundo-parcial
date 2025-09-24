import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {

  /** Notification API: pedir permiso al navegador */
  async requestPermission(): Promise<NotificationPermission> {
    if (!('Notification' in window)) {
      Swal.fire('Error', 'Notificaciones no soportadas en este navegador.', 'error');
      return 'denied';
    }
    return await Notification.requestPermission();
  }

  /** Notification API: mostrar notificación nativa */
  showNotification(title: string, options?: NotificationOptions) {
    if (Notification.permission === 'granted') {
      new Notification(title, options);
    } else {
      Swal.fire('Atención', 'Primero debes permitir notificaciones.', 'warning');
    }
  }

  /** SweetAlert2: alerta genérica */
  show(title: string, text: string, icon: SweetAlertIcon = 'info') {
    Swal.fire({ title, text, icon, confirmButtonText: 'Aceptar' });
  }

  success(message: string) { this.show('Éxito', message, 'success'); }
  error(message: string) { this.show('Error', message, 'error'); }
  warning(message: string) { this.show('Advertencia', message, 'warning'); }

  /** SweetAlert2: confirmación */
  async confirm(title: string, text: string): Promise<boolean> {
    const result = await Swal.fire({
      title,
      text,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar',
    });
    return result.isConfirmed;
  }

  /** SweetAlert2: toast en esquina superior derecha */
  toast(message: string, icon: SweetAlertIcon = 'info', timer: number = 3000) {
    Swal.fire({
      toast: true,
      position: 'top-end',       // esquina superior derecha
      icon,
      title: message,
      showConfirmButton: false,
      timer: timer,
      timerProgressBar: true,
      background: '#333',        // color de fondo
      color: '#fff',             // texto blanco
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
  }
}

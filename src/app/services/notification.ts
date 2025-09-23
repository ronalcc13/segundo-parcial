import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  async requestPermission(): Promise<NotificationPermission> {
    if (!('Notification' in window)) {
      alert('Las notificaciones no son soportadas en este navegador.');
      return 'denied';
    }
    return await Notification.requestPermission();
  }

  showNotification(title: string, options?: NotificationOptions): void {
    if (Notification.permission === 'granted') {
      console.log('Mostrando notificación:', title, options);
      new Notification(title, options);
    } else {
      console.warn('No tienes permiso para notificaciones.');
      alert('Primero debes permitir notificaciones.');
    }
  }
}

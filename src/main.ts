import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { provideServiceWorker } from '@angular/service-worker';
import { isDevMode } from '@angular/core';

bootstrapApplication(App, {
  providers: [
    ...appConfig.providers,
    provideServiceWorker('/segundo-parcial/ngsw-worker.js', {
      enabled: !isDevMode(), // ✅ solo activa en producción
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
}).catch((err) => console.error(err));

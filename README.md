# SegundoParcial

## 2do Parcial - Tecnologías de Internet 2-2025
Dev: Ronaldo Cahuasiri Colque
Tema: Universidad Adventista de Bolivia - UAB
Curso: Tecnologías de Internet

## CSS Framework
Este proyecto usa Tailwind CSS.
Fuente: https://tailwindcss.com/

## Template utilizado

Este proyecto utiliza el template gratuito **CryptoFlow – Free Tailwind CSS Business & Corporate Template** obtenido de [ThemeWagon](https://themewagon.com/themes/cryptoflow/).

- **Autor:** ThemeWagon
- **Fuente:** https://themewagon.com/themes/cryptoflow/
- **Licencia:** Gratuito para uso personal y comercial según los términos de ThemeWagon
- **Documentación:** https://themewagon.com/docs/cryptoflow/

## Offline Support (Home)

La página principal ahora funciona **offline** gracias a un Service Worker que realiza **precaching** de los recursos esenciales:

- HTML de la Home (`index.html`)
- CSS principal y estilos
- JS de Angular (bundle principal)
- Imágenes clave del template (logo, hero, íconos)

### Cómo funciona

1. El Service Worker registra y guarda los archivos críticos en la **caché del navegador** la primera vez que se carga la Home.  
2. Cuando el usuario visita la página sin conexión a Internet, el Service Worker entrega los archivos desde la caché, garantizando que la Home se vea y funcione correctamente.  
3. Otros archivos opcionales pueden cargarse bajo demanda.

### Prueba de Offline

1. Abrir la página principal en un navegador compatible con PWA.  
2. Abrir **DevTools > Application > Service Workers** y verificar que el Service Worker esté activo.  
3. Desconectar Internet (modo avión).  
4. Recargar la página: la Home debe mostrarse correctamente con estilos, imágenes y scripts funcionando.

**Commit relacionado:** `feat(pwa): offline-ready home with precaching`


This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

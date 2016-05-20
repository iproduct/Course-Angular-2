import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HelloNg2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(HelloNg2AppComponent);

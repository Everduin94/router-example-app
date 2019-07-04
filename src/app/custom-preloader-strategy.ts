import { Route, PreloadingStrategy } from '@angular/router';
import { Observable, of } from 'rxjs';

export class CustomPreloaderStrategy implements PreloadingStrategy {
    preload(route: Route, load: () => Observable<any>): Observable<any> {
      const isPreloadEnabled = route.data && route.data.preload; 
      return isPreloadEnabled ? load() : of(null);
    }
  }
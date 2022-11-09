import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../_services/token.service';

// Interceptor doit continuellement tourner, en toute autonomie (constamment actif)
// Son rôle est de capter une requête avant qu'elle ne sorte d'Angular, d'y insérer quelque chose si besoin
// L'api voit ensuite que l'on est bien authentifié si tout est ok
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("REQUEST", request);
    const token = this.tokenService.getToken()
    // Si token à insérer dans le header
    // On ne peut pas modifier une requête
    if (token !== null) {
      let clone = request.clone({
        headers: request.headers.set('Authorization', 'bearer ' + token)
      })
      console.log("CLONE",clone);
      return next.handle(clone);
    }
    return next.handle(request);
  }
}
// On construit un provider
// L'ajouter dans app.module.ts
export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
}

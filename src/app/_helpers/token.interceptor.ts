import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
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
      console.log("CLONE", clone);
      // Avant que l'interceptor ne relâche la requête, je lui ajoute une méca pour la réponse (pipe => ajout de la mécanique)
      return next.handle(clone).pipe(
        catchError(error => {
          console.log(error);
          if (error.status === 401) {
            this.tokenService.clearTokenExpired()
          }
          return throwError('session expired')
        })
      );
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

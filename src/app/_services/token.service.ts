import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Le service ne sera mis en mémoire que lorsqu'il sera utilisé (contrairement au fonctionnement de l'Interceptor
// qui doit continuellement tourner)
// Pour économie de ressources => lazy loading
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) { }
// Token sauvegardé dans localstorage
  saveToken(token: string): void {
    localStorage.setItem('token', token)
    this.router.navigate(['admin'])
  }
// Check si token existe
  isLogged(): boolean {
    const token = localStorage.getItem('token')
    // Si clé token n'existe pas, return null => null en booleen == false
    return !!token
  }
// Token supprimé du localstorage et redirection
  clearToken(): void {
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }
  getToken():string | null{
return localStorage.getItem('token')
  }
  clearTokenExpired():void{
    localStorage.removeItem('token')
    this.router.navigate(['auth'])
      }
}

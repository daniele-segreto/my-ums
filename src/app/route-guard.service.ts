import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { } // Inietto il Servizio nelle rotte (oltre al Router)

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // Se l'utente è loggato returna 'true'
    if(this.auth.isUserLoggedIn()) {
      return true;
      // Altrimenti direzionalo sulla pagina di 'login'
    } else {
      // this.router.navigate(['login']); // canActivate è deprecato, quindi in questo modo non funziona
      return this.router.parseUrl('/login'); // soluzione rimediata con openAI
    }
  }
}

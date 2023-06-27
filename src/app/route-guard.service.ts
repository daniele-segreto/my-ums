import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // Reindirizza l'utente alla rotta 'users'
    this.router.navigate(['users']);
    // Restituisce true per consentire l'accesso alla rotta
    return true;
  }
}

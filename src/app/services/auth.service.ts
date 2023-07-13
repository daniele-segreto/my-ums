import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Variabile che serve a verificare se l'utente è loggato (true) o no (false)
  private isUserLogged = false;

  constructor() { }

  // Logica che serve a capire se l'utente è loggato
  isUserLoggedIn() {
    return this.isUserLogged;
  }

  // Metodo con cui l'utente farà il login
  signIn(email: string, password: string) {

  }

  // Metodo con cui l'utente fa la registrazione
  signUp(username: string, email: string, password: string) {

  }

  // Metodo con cui l'utente farà il logout
  logout() {
    this.isUserLogged = false;
  }
}

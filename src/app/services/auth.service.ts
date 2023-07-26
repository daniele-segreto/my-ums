import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Variabile privata che serve a verificare se l'utente è loggato (true) o no (false)
  private isUserLogged = false; // Viene inizializzata a false quando viene creato l'oggetto

  constructor() { }

  // Metodo che controlla se l'utente è loggato o meno
  isUserLoggedIn() {
    // Verifica se esiste un valore chiamato 'token' nello storage locale
    // !! è usato per convertire il valore restituito da getItem in un valore booleano
    this.isUserLogged = !!localStorage.getItem('token');
    // Restituisce il valore corrente di isUserLogged (true se l'utente è loggato, altrimenti false)
    return this.isUserLogged;
  }

  // Metodo per il login dell'utente, richiede email e password come parametri
  signIn(email: string, password: string) {
    // Avviso temporaneo per verificare se l'email e la password vengono ricevute correttamente (per debug)
    // alert(email + ', ' + password);

    // Verifica se esiste il token nello storage locale, inserendo l'email come valore del token
    localStorage.setItem('token', email);

    // Restituisce true, indicando che il login è avvenuto con successo
    return true;
  }

  // Metodo per la registrazione dell'utente, richiede username, email e password come parametri
  signUp(username: string, email: string, password: string) {
    // Verifica se esiste il token nello storage locale, inserendo l'email come valore del token
    localStorage.setItem('token', email);

    // Restituisce true, indicando che il login è avvenuto con successo
    return true;
  }

  // Metodo per il logout dell'utente
  logout() {
    // Rimuove il valore 'token' dallo storage locale
    localStorage.removeItem('token');

    // Imposta la variabile isUserLogged a false per indicare che l'utente non è più loggato
    this.isUserLogged = false;
  }
}

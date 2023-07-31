import { EventEmitter, Injectable, Output } from '@angular/core';
import { User } from '../classes/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Variabile privata che serve a verificare se l'utente è loggato (true) o no (false)
  private isUserLogged = false; // Viene inizializzata a false quando viene creato l'oggetto

  // Istanza di EventEmitter per emettere un evento quando un utente effettua l'accesso
  @Output() usersignedin = new EventEmitter<User>();

  // Istanza di EventEmitter per emettere un evento quando un utente si registra
  @Output() usersignedup = new EventEmitter<User>();

  // Istanza di EventEmitter per emettere un evento quando un utente effettua il logout
  @Output() userlogout = new EventEmitter();

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

    let user = new User(); // Creo un'istanza finta dell'utente
    user.name = 'Test User'; // Imposto il nome dell'utente con il valore "Test"
    user.email = email; // Imposto l'email dell'utente con il valore passato come parametro
    this.usersignedin.emit(user); // Emetto un evento "usersignedin" con l'oggetto "user" come dato associato

    // Restituisce true, indicando che il login è avvenuto con successo
    return true;
  }

  // Metodo per la registrazione dell'utente, richiede username, email e password come parametri
  signUp(username: string, email: string, password: string) {
    // Verifica se esiste il token nello storage locale, inserendo l'email come valore del token
    localStorage.setItem('token', email);

    let user = new User(); // Creo un'istanza finta dell'utente
    user.name = username; // Imposto il nome dell'utente con il valore passato come parametro "username"
    user.email = email; // Imposto l'email dell'utente con il valore passato come parametro "email"
    this.usersignedup.emit(user); // Emetto un evento "usersignedup" con l'oggetto "user" come dato associato

    // Restituisce true, indicando che il login è avvenuto con successo
    return true;
  }

  // Metodo per il logout dell'utente
  logout() {
    // Rimuove il valore 'token' dallo storage locale
    localStorage.removeItem('token');

    // Emette l'evento "userlogout" senza dati associati
    this.userlogout.emit();

    // Imposta la variabile isUserLogged a false per indicare che l'utente non è più loggato
    this.isUserLogged = false;
  }
}

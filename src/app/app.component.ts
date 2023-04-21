import { Component } from '@angular/core';
// import { User } from '../interfaces/user';
import { User } from './classes/User'; // uso la classe anziché l’interfaccia

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Variabile che serve a definire l'utente selezionato
  // userSelected: User | undefined;
  // ho tolto undefined in modo da evitare errori in tempo di esecuzione, tutto questo viene controllato dallo strict messo nel file di configurazione tsconfig.json

  // Finchè non creiamo una classe user che possiamo istanziare e creare un oggetto nuovo, possiamo inizializzare sia quì che nel costruttore in app.component.ts, un oggetto con le stesse proprietà della interface e con i valori vuoti (impostazioni che servono a rendere il codice più robusto)
  // userSelected: User = {
  //   id: 0, // aggiungo l'id
  //   name: '',
  //   lastname: '',
  //   email: '',
  //   fiscalcode: '',
  //   province: '',
  //   phone: '',
  //   age: 0,
  // }

  // Inizializzo la variabile per mostrare il form a false
  showForm = false; // ho tolto il tipo boolean, perchè quando abbiamo un valore di default lo interpreta in automatico

  // In userSelected abbiamo un nuovo utente inizializzato attraverso la classe 'User' che implementa l'interfaccia 'UserInterface'
  userSelected: User = new User();

  // Modifica utente
  updateUser(user: User) {
    this.showForm = true; // modifico la variabile a true, solo quando scatta questa funzione
    this.userSelected = user; // L'utente selezionato sarà l'utente che viene passato come parametro in questa funzione
  }

  // Nuovo utente
  newUser() {
    this.userSelected = new User(); // reinizializziamo userSelected (viene il form nuovo, senza alcun utente inserito)
    this.showForm = true; // mostriamo il form
  }

}

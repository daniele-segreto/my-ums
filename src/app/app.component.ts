import { Component } from '@angular/core';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Variabile che serve a definire l'utente selezionato
  // userSelected: User | undefined;

  // Finchè non creiamo una classe user che possiamo instanziare e creare un oggetto nuovo, possiamo inizializzare sia quì che nel costruttore in app.component.ts, un oggetto con le stesse proprietà della interface e con i valori vuoti (impostazioni che servono a rendere il codice più robusto)
  userSelected: User = {
    name: '',
    lastname: '',
    email: '',
    fiscalcode: '',
    province: '',
    phone: '',
    age: 0,
  }

  // Modifica utente
  updateUser(user: User) {
    this.userSelected = user; // L'utente selezionato sarà l'utente che viene passato come parametro in questa funzione
  }
}

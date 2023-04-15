import { Component } from '@angular/core';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Variabile che serve a definire l'utente selezionato
  userSelected: User | undefined;

  // Modifica utente
  updateUser(user: User) {
    this.userSelected = user; // L'utente selezionato sarà l'utente che viene passato come parametro in questa funzione
  }
}

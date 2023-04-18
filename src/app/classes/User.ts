import { UserInterface } from "../interfaces/user";

export class User implements UserInterface {
  id: number;
  name: string;
  lastname: string;
  email: string;
  fiscalcode: string;
  province: string;
  phone: string;
  age: number;
  // Inizializzo i valori attraverso il costruttore
  constructor() {
    this.id = 0;
    this.name = '';
    this.lastname = '';
    this.email = '';
    this.fiscalcode = '';
    this.province = '';
    this.phone = '';
    this.age = 18;
  }
  // A questo punto che abbiamo la classe con dei valori di default, se salviamo vediamo che l'id è 0, vuol dire che sto inserendo un nuovo utente, altrimenti vuol dire che sto modificando un utente già presente, perché l'id è maggiore di zero (comparirà l'id dell'utente selezionato). E il form lo possiamo decidere quando viene passato nell'app.component.ts, quando viene messo il valore user in:
  //   updateUser(user: User) {
  //      this.userSelected = user;
  //   }
  // Oppure sempre in app.component.ts, quando abbiamo il click per creare un altro utente possiamo mettere ad esempio 'showForm' di tipo 'boolean' con valore di default 'false', e solo nel caso in cui si seleziona l'utente cambiamo il valore a true (e condiziono il fatto di mostrare o no nell'app.component.html, il div che contiene <app-user-detail>, non basato sull'utente, quindi 'userSelected', ma basato appunto sulla variabile 'showForm'), a questo punto il div non ci sarà, quindi quando cliccherò update verrà mostrato il form:
  //  showForm: boolean = false; <-----

  //   updateUser(user: User) {
  //      this.showForm = true; <-----
  //      this.userSelected = user;
  //   }
  // Bisogna mettere un link in modo tale che quando clicchiamo possiamo andare a mettere un nuovo utente.

}

import { Component, Input } from '@angular/core';
// import { User } from '../interfaces/user';
import { User } from '../classes/User'; // uso la classe anziché l’interfaccia
import { UserService } from '../services/user.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  // Dichiarazione di due variabili private della classe UserComponent
  private userCopy!: User;
  private __user!: User;

  // Definizione del setter 'user' con l'annotazione @Input
  // Questo setter viene richiamato quando il componente padre passa l'oggetto 'user' come input
  @Input() set user(user: User) {
  // L'oggetto 'user' viene salvato nella variabile '__user'
  this.__user = user;
  // Viene creato un nuovo oggetto 'userCopy' con i valori dell'oggetto 'user'
  // Questo oggetto serve per creare una copia di backup dell'oggetto originale e utilizzarlo in caso di necessità
  this.userCopy = Object.assign({}, user);
}

// Definizione del getter 'user' che restituisce l'oggetto '__user'
get user() {
  return this.__user;
}

  constructor(private userService: UserService) { } // inietto il servizio sul costruttore

  // Metodo per salvare l'utente
  saveUser() {
    // alert(this.user.name); // vediamo il valore dell'utente (dopo la modifica del nome, cliccando save, in alert avremo il nome modificato)
    // alert(this.user.id);  // se mettiamo l'id, abbiamo accesso a quell'id (ad ogni utente che clicchiamo abbiamo il suo id, questo ci serve perchè quando andremo a creare un utente, noi possiamo verificare se esiste quell'id o no, se non esiste l'id allora l'utente sarebbe vuoto)

    // verifichiamo se esiste l'id o no.
    // Possiamo verificare: se l'id è true (o se è maggiore di 0, sappiamo che 0 è uguale a false), devo chiamare il servizio e il suo metodo (passando come parametro l'utente stesso)
    if (this.user.id > 0) {
      this.userService.updatUser(this.user); // (nel caso in cui abbiamo già l'utente) chiamo dunque il metodo per aggiornare l'utente
    } else {
      this.userService.createUser(this.user); // altrimenti chiamo il metodo per creare un nuovo utente
    }
  }

  // Metodo per resettare il form
  resetForm(form: FormGroup) {
    if (this.user.id === 0) { // se user.id è uguale a zero, cioè se l'utente inserito sul form è un nuovo utente
      this.user = new User(); // andiamo a ripopolare il form (il form viene resettato)
    } else {
      this.__user = this.userCopy; // altrimenti resettiamo il form completamente
    }
  }

}

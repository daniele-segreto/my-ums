import { Component, Input } from '@angular/core';
// import { User } from '../interfaces/user';
import { User } from '../classes/User'; // uso la classe anziché l’interfaccia
import { UserService } from '../services/user.service';
import { FormGroup } from '@angular/forms'; ///////

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  // Dichiaro la variabile con @Inpunt per far riceverla a form-detail
  @Input() user!: User;
  // ^ ho tolto undefined in modo da evitare errori in tempo di esecuzione, tutto questo viene controllato dallo strict messo nel file di configurazione tsconfig.json

  // Finchè non creiamo una classe user che possiamo instanziare e creare un oggetto nuovo, possiamo inizializzare sia quì (nel costruttore), che in user-detail.component.ts, un oggetto con le stesse proprietà della interface e con i valori vuoti
  // constructor() {
  //   this.user = {
  //     id: 0, // aggiungo l'id
  //     name: '',
  //     lastname: '',
  //     email: '',
  //     fiscalcode: '',
  //     province: '',
  //     phone: '',
  //     age: 0,
  //   }
  // }

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
      form.reset(); // altrimenti resettiamo il form completamente
    }
  }

}

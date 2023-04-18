import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';
// import { User } from '../interfaces/user';
import { User } from '../classes/User'; // uso la classe anziché l’interfaccia

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title = 'Users';
  users: User[] = [];
  // Mettiamo un Evento in uscita che avrà come parametro un utente (<User>)
  @Output() updateUser = new EventEmitter<User>();

  constructor(private service: UserService) {}

  // ngOnInit() viene invocato solo una volta quando viene istanziata la direttiva,
  // cioè viene chiamato solo quando il nostro componente è pronto
  ngOnInit(): void {
    // this.users[0]. adesso abbiamo anche l'autocompletamento... (molto utile quando programmiamo)
    this.users = this.service.getUsers();
  }

  // Metodo che scatta all'emissione dell'evento in @Output('onDeleteUser') - riceve un utente di tipo User
  onDeleteUser(user: User) {
    this.service.deleteUser(user); // chiamo il servizio e la funzione per cancellare l'utente
  }

  // Metodo che scatta all'emissione dell'evento in @Output('onSelectUser') - riceve un utente di tipo User
  onSelectUser(user: User) {
    // Passo una copia dell'utente e non il riferimento
    // All'oggetto javascript diamo il metodo assign, a cui passiamo un oggetto target (in questo caso un oggetto vuoto) e poi l'oggetto da cui copiare (in questo caso sarebbe una copia di dell'oggetto user)
    const userCopy = Object.assign({}, user);
    this.updateUser.emit(userCopy); // chiamo la funzione per avviare/emettere il form di modifica, passandogli la copia del nostro oggetto
  }
  // A questo punto, questo evento viene rilanciato all'esterno e l'app.component.html può ascoltare e rispondere a questo evento

}

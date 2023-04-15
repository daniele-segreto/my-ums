import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

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
    // alert(user.lastname); // al click, riceviamo un alert con il cognome dell'utente selezionato
    this.updateUser.emit(user); // chiamo il servizio e la funzione per avviare il form di modifica
  }
  // A questo punto, questo evento viene rilanciato all'esterno e l'app.component può ascoltare e rispondere a questo evento

}

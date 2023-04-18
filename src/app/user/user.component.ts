import { Component, EventEmitter, Input, Output } from '@angular/core'; // attenzione all'importazione di EventEmitter (deve essere importata da '@angular/core')
import { UserService } from '../services/user.service';
// import { User } from '../interfaces/user';
import { User } from '../classes/User'; // uso la classe anziché l’interfaccia

@Component({
  selector: 'tr[app-user]', // selezione un elemento 'tr' che abbia come attributo [app-user]
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  // RICEVO I DATI DAL COMPONENTE PADRE:
  // Ricevo in input dei valori attraverso quest variabile dall'esterno
  @Input('user-data') user: User | undefined; // 'user-data' è un alias esterno

  // EMETTO UN EVENTO IN MODO DA POTER ESSERE ASCOLTATO AL DI FUORI DEL COMPONENTE (grazie al decoratore @Output):
  // 'onDeleteUser' è il nome che avrà l'evento perché venga catturato*
  // userDeleted invece è la variabile, la proprietà della classe che usiamo qui all'interno
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  // NOTE: *Quasi sempre gli eventi vengono nominati con la parola on davanto e poi il nome dell'evento che vogliamo dare 'onDeleteUser'

  // EMETTO UN EVENTO IN MODO DA POTER ESSERE ASCOLTATO AL DI FUORI DEL COMPONENTE (grazie al decoratore @Output):
  // onSelectedUser è il nome della variabile utilizzata
  @Output() onSelectUser = new EventEmitter();

  constructor(private userService: UserService) { }

  // Non è necessario passare il parametro user, lo abbiamo già ricevuto in @Input (sopra)
  // deleteUser(user: any) {
  //   alert(user.lastname)
  // }

  // Quindi accediamo al parametro user tramite il this...

  // ELIMINA UTENTE
  deleteUser() {
    // utilizzo il metodo 'deleteUser' (che si trova sul nostro servizio 'userService')
    // e gli passiamo this.user (cioè l'utente corrente, dove abbiamo cliccato il pulsante)
    // this.userService.deleteUser(this.user);

    // chiamiamo l'evento 'userDeleted', chiamiamo il metodo 'emit' per emettere l'evento
    this.userDeleted.emit(this.user); // passiamo come parametro l'utente che si vuole cancellare (quindi this.user)
  }

  // MODIFICA UTENTE
  updateUser() {
    // chiamiamo l'evento 'onSelectDeleter', chiamiamo il metodo 'emit' per emettere l'evento
    this.onSelectUser.emit(this.user); // passiamo come parametro l'utente che si vuole cancellare (quindi this.user)
  }
  // A questo punto, questo evento viene rilanciato all'esterno e users.component.html può ascoltare e rispondere a questo evento

}

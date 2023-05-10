import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = 'Users';

  public users$: Observable<User[]> = this.service.getUsers();
  public users: User[] = []; // Inizializzo la variabile 'users' con un array vuoto di oggetti 'User' (serve per il METODO 2)

  @Output() updateUser = new EventEmitter<User>();

  constructor(private service: UserService) {}

  ngOnInit(): void {
    // *METODO 2:
    this.service.getUsers().subscribe(res => this.users = res);
  }

  // Questo codice cancella l'utente dal database e ricarica la pagina
  onDeleteUser(user: User) {
    this.service.deleteUser(user).subscribe(res => { // Si sottoscrive all'Observable restituito dal metodo 'deleteUser' del servizio per eliminare l'utente dal database

      // METODO 1: utilizzando sul file html: <tbody *ngIf="(users$ | async) as users">
      // location.reload(); // Ricarica la pagina dopo la cancellazione dell'utente

      // *METODO 2: togliendo l'*ngIf dal <tbody>
      // Questo codice richiede la lista degli utenti dal server e la assegna alla variabile 'users'
      this.service.getUsers().subscribe(res => this.users = res);
      // Si sottoscrive all'Observable restituito dal metodo 'getUsers' del servizio per ottenere la lista degli utenti dal server. Quando la risposta arriva, assegna la lista degli utenti alla variabile 'users'.
    });
  }

  onSelectUser(user: User) {
    const userCopy = Object.assign({}, user);
    this.updateUser.emit(userCopy);
  }

}

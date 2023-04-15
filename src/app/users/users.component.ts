import { Component, OnInit } from '@angular/core';
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

  constructor(private service: UserService) {}

  // ngOnInit() viene invocato solo una volta quando viene istanziata la direttiva,
  // cioè viene chiamato solo quando il nostro componente è pronto
  ngOnInit(): void {
    // this.users[0]. adesso abbiamo anche l'autocompletamento... (molto utile quando programmiamo)
    this.users = this.service.getUsers();
  }

  // Metodo che scatta all'emissione dell'evento in @Output('onDeleteUser') - riceve un utente
  onDeleteUser(user: User) {
    this.service.deleteUser(user); // chiamo il servizio e la funzione per cancellare l'utente
  }

}

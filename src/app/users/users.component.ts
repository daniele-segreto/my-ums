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

  // users: User[] = [];
  //public users: Observable<User[]> = new Observable; // trasformiamo 'users' in un Observable di tipo array

  // - oppure lo impostiamo direttamente quà, invece che metterlo in ngOnInit() --->

  // Dichiarazione di una variabile pubblica della classe con tipo Observable<User[]>
  // Inizializzazione della variabile con la chiamata al metodo getUsers() del servizio 'service'
  public users$: Observable<User[]> = this.service.getUsers(); // <=== *
  // N.B. il dollaro il users$ è una convenzione che serve ad indicare che la variabile è un Observable (una stream di dati)
  // Questo Observable viene chiamato quando noi chiamiamo la pipe sull'html

  @Output() updateUser = new EventEmitter<User>();

  constructor(private service: UserService) {}

  ngOnInit(): void {
    // Chiamata al servizio getUsers() tramite l'istanza di this.service
    // this.users = this.service.getUsers() <=== *
      // Sottoscrizione all'Observable restituito dal servizio
      // .subscribe(response => this.users = response);
  }

  onDeleteUser(user: User) {
    this.service.deleteUser(user);
  }

  onSelectUser(user: User) {
    const userCopy = Object.assign({}, user);
    this.updateUser.emit(userCopy);
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { Router } from '@angular/router';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input('user-data') user: User | undefined;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output() onSelectUser = new EventEmitter();

  faPen= faPencilAlt;
  faTrash = faTrash;
  iconSize: SizeProp | undefined = 'xs';

    // Inietto il router nel costruttore
    constructor(private userService: UserService, private route: Router) { }

  deleteUser() {
    this.userDeleted.emit(this.user);
  }

  updateUser() {
    // 1) Il metodo 'navigateByUrl' permette di passare direttamente l'Url tramite una 'stringa'
    // this.route.navigateByUrl('/users/' + this.user?.id + '/edit');
    // 2) Il metodo 'navigate' può ricevere un 'array' di parametri (invece di prendersi una stringa)
    // this.route.navigate(['users', this.user?.id, 'edit']);
    // [ N.B. il '?' serve ad evitare il problema, dato che 'user' può essere di tipo dia 'User' che 'undefined' ]

    // this.onSelectUser.emit(this.user); // non serve più emettere questo evento (il click non c'è più)
  }

}

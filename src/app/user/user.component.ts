import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input('user-data') user: User | undefined;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output() onSelectUser = new EventEmitter();

  constructor(private userService: UserService) { }

  faPen= faPencilAlt; // icona del tasto modifica
  faTrash = faTrash; // icona del tasto elimina
  iconSize: SizeProp | undefined = 'xs'; // dimensione delle icone (attraverso la libreria FontAwesome)

  deleteUser() {
    this.userDeleted.emit(this.user);
  }

  updateUser() {
    this.onSelectUser.emit(this.user);
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';
import { faPencilAlt, faTrash, faInfo } from '@fortawesome/free-solid-svg-icons';
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
  faInfo = faInfo; // Icona info (per il tasto del dettaglio utente)
  iconSize: SizeProp | undefined = 'xs';

  // Inietto il router nel costruttore
  constructor(private userService: UserService, private route: Router) { }

  deleteUser() {
    this.userDeleted.emit(this.user);
  }

  // *Funzione non utilizzata, preferisco accedere alla rotta tramite [routerLink] sull'html
  // showUserDetail() {
  //   this.route.navigateByUrl('/users/' + this.user?.id);
  // }

}

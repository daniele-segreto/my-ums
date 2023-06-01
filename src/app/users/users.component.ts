import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';
import { Observable } from 'rxjs';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {
  title = 'Users';

  public users$: Observable<User[]> = this.service.getUsers();

  @Output() updateUser = new EventEmitter<User>();

  @ViewChildren(UserComponent, {read: ElementRef}) trs!: QueryList<ElementRef>;

  constructor(private service: UserService) {}

  ngAfterViewInit(): void {
    console.log('afterViewInit', this.trs);
  }

  ngOnInit(): void {
    // code...
  }

  // QUESTA PARTE NON FUNZIONAVA...
  // onDeleteUser - Elimina un utente
  // onDeleteUser(user: User) {
    // Effettua una chiamata al servizio per eliminare l'utente specificato e si sottoscrive all'observable per ottenere la risposta
    // this.service.deleteUser(user).subscribe(
      // res => {
      // Visualizza un messaggio di avviso con il messaggio di risposta ricevuto
      // alert(res.message);
      // Effettua una chiamata per ottenere nuovamente la lista degli utenti dal servizio e si sottoscrive all'observable per ottenere i dati aggiornati
      // this.service.getUsers().subscribe(res=>{this.users = res.data});
      // },
      // Gestisce eventuali errori durante la chiamata
      // (err: any) => {
      // Visualizza un messaggio di avviso con il messaggio di errore ricevuto
      // alert(err.error.message);
      // Stampa l'errore nella console per scopi di debug o di registrazione
      // console.log(err);
      // }
    // )
  // }

  // ...E' STATA SOSTITUITA CON QUESTA (utilizzando le indicazioni su: https://github.com/hidran/corso-angular/blob/2fdb83a0e5805c25ccfc13b3b88ceb06193967e5/src/app/users/users.component.ts):

  // onDeleteUser - Riceve un utente da eliminare
  onDeleteUser(user: User) {
    // Effettua una chiamata al servizio per eliminare l'utente specificato e si sottoscrive all'observable per ottenere la risposta
    this.service.deleteUser(user).subscribe(res => {
      // Itera su ogni elemento nell'array trs (presumibilmente una collezione di elementi HTML)
      this.trs.forEach(ele => {
        // Ottiene l'elemento HTML corrente dalla raccolta
        const el = ele.nativeElement;
        // Verifica se l'ID dell'elemento corrente corrisponde all'ID dell'utente da eliminare
        if (Number(el.id) === user.id) {
          // Rimuove l'elemento HTML dal suo genitore (presumibilmente una tabella)
          el.parentNode.removeChild(el);
        }
      })
    });
  }

  onSelectUser(user: User) {
    const userCopy = Object.assign({}, user);
    this.updateUser.emit(userCopy);
  }

}

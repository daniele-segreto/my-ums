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
export class UsersComponent implements OnInit, AfterViewInit { // implemento anche AfterViewInit
  title = 'Users';

  public users$: Observable<User[]> = this.service.getUsers();
  // public users: User[] = []; // non serve più (era un esempio)

  @Output() updateUser = new EventEmitter<User>();

  // @ViewChildren(UserComponent) trs!: QueryList<UserComponent>;

  // Utilizzo il decoratore @ViewChildren in Angular per ottenere un riferimento
  // a tutti gli elementi UserComponent presenti all'interno di un componente.
  // La proprietà 'read' indica che l'oggetto restituito dalla QueryList sarà di tipo ElementRef.
  @ViewChildren(UserComponent, {read: ElementRef}) trs!: QueryList<ElementRef>;
  // '!' vuol dire che trs non sarà né 'null', ne 'undefined', quindi non verrà segnalato come errore

  constructor(private service: UserService) {}

  // Il metodo ngAfterViewInit() viene chiamato quando la vista del componente è stata completamente inizializzata
  ngAfterViewInit(): void {
    // Stampa sulla console il messaggio "afterViewInit" e la lista di riferimenti agli elementi ottenuta tramite il decoratore @ViewChildren
    console.log('afterViewInit', this.trs);
    // this.trs.forEach(ele => console.log(ele)); // lo metto in: 'onDeleteUser'
  }

  ngOnInit(): void {
    // this.service.getUsers().subscribe(res => this.users = res); // non serve più (era un esempio)
  }

  // METODO 3:
  onDeleteUser(user: User) {
    // Viene chiamato il metodo deleteUser() dal servizio (passando l'utente da eliminare)
    this.service.deleteUser(user).subscribe(res => {
      // this.service.getUsers().subscribe(res => this.users = res); non serve più (era un esempio)
      // Viene iterata la lista di elementi UserComponent ottenuta tramite il decoratore @ViewChildren
      this.trs.forEach(ele => {
        // Per ciascun elemento della lista viene ottenuto l'oggetto nativo corrispondente
        const el = ele.nativeElement;
        // Se l'id dell'elemento corrisponde all'id dell'utente che si desidera eliminare...
        if (Number(el.id) === user.id) {
          el.parentNode.removeChild(el); //...l'elemento viene rimosso dal DOM
        }
      });
    });
  }

  onSelectUser(user: User) {
    const userCopy = Object.assign({}, user);
    this.updateUser.emit(userCopy);
  }

}

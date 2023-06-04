import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { UserService, UsersResponse } from '../services/user.service';
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

  public users$: Observable<UsersResponse> = this.service.getUsers();

  @Output() updateUser = new EventEmitter<User>();

  @ViewChildren(UserComponent, {read: ElementRef}) trs!: QueryList<ElementRef>;

  constructor(private service: UserService) {}

  ngAfterViewInit(): void {
    console.log('afterViewInit', this.trs);
  }

  ngOnInit(): void { }

  // onDeleteUser - Riceve un utente da eliminare
  onDeleteUser(user: User) {
    this.service.deleteUser(user).subscribe({
      next: res => {
        this.trs.forEach(ele => {
          const el = ele.nativeElement;
          if (Number(el.id) === user.id) {
            el.parentNode.removeChild(el);
          }
        })
      }
    });
  }

  onSelectUser(user: User) {
    const userCopy = Object.assign({}, user);
    this.updateUser.emit(userCopy);
  }

}

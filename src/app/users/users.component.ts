import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title = 'Users';
  users: any[] = []

  constructor(private service: UserService) {}

  // ngOnInit() viene invocato solo una volta quando viene istanziata la direttiva,
  // cioè viene chiamato solo quando il nostro componente è pronto
  ngOnInit(): void {
    this.users = this.service.getUsers();
  }

}

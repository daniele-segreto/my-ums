import { Injectable } from '@angular/core';
import { User } from '../classes/User';
import { UserInterface } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users: User[] = [
    {
      id: 1,
      name: 'Daniele1',
      lastname: 'Segreto1',
      email: 'daniele@gmail.com',
      fiscalcode: 'SGTDAN77J33X777Z',
      province: 'Palermo',
      phone: '3334455678',
      age: 33,
    },
    {
      id: 2,
      name: 'Daniele2',
      lastname: 'Segreto2',
      email: 'daniele@gmail.com',
      fiscalcode: 'SGTDAN77J33X777Z',
      province: 'Palermo',
      phone: '3334455678',
      age: 33
    },
    {
      id: 3,
      name: 'Daniele3',
      lastname: 'Segreto3',
      email: 'daniele@gmail.com',
      fiscalcode: 'SGTDAN77J33X777Z',
      province: 'Palermo',
      phone: '3334455678',
      age: 33
    },
    {
      id: 4,
      name: 'Daniele4',
      lastname: 'Segreto4',
      email: 'daniele@gmail.com',
      fiscalcode: 'SGTDAN77J33X777Z',
      province: 'Palermo',
      phone: '3334455678',
      age: 33
    },
  ];

  getUsers() {
    return this.users;
  }

  // Riceve un id e ritorna un utente a quella posizione (cioè alla stessa posizione dell'id selezionato)
  getUser(id: number): User {
    return this.users[id];
  }

  deleteUser(user: User) {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }

  updateUser(user: UserInterface) {
    const idx = this.users.findIndex((v) => v.id === user.id);
    alert(idx);
    if (idx !== -1) {
      this.users[idx] = {...user};
    }
  }

  createUser(user: UserInterface) {
    this.users.splice(0, 0, {...user});
  }

}

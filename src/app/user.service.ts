import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users = [
    {
      name: 'Daniele1',
      lastname: 'Segreto1',
      email: 'daniele@gmail.com',
      fidcalcode: 'SGTDAN77J33X777Z',
      province: 'Palermo',
      phone: '3334455678',
      age: 33
    },
    {
      name: 'Daniele2',
      lastname: 'Segreto2',
      email: 'daniele@gmail.com',
      fidcalcode: 'SGTDAN77J33X777Z',
      province: 'Palermo',
      phone: '3334455678',
      age: 33
    },
    {
      name: 'Daniele3',
      lastname: 'Segreto3',
      email: 'daniele@gmail.com',
      fidcalcode: 'SGTDAN77J33X777Z',
      province: 'Palermo',
      phone: '3334455678',
      age: 33
    },
    {
      name: 'Daniele4',
      lastname: 'Segreto4',
      email: 'daniele@gmail.com',
      fidcalcode: 'SGTDAN77J33X777Z',
      province: 'Palermo',
      phone: '3334455678',
      age: 33
    },
  ];

  getUsers() {
    return this.users;
  }

  // Questo metodo riceve un utente (al momento di tipo any, per non fare lamentare TypeScript)
  deleteUser(user: any) {
    // andiamo a cercare l'indice dell'utente con il metodo index.Of
    // con 'indexOf' noi passiamo l'oggetto e ci deve ritornare l'indice (cioè dove si trova quell'elemento)
    const index = this.users.indexOf(user);
    // se 'indexOf' non trova l'elemento ci ritorna -1
    // quindi se l'indice è maggiore di -1 (quindi da 0 in poi), noi andiamo ad eliminare quell'elemento (l'utente) con 'splice'
    if (index > -1) {
      // il metodo 'splice' accetta come parametri:
      // 1° elemento => da quale posizione vogliamo cominciare a togliere emenento (da index, l'indice selezionato)
      // 2° elemento => quantità di elementi che vogliamo eliminare (in questo caso solo 1)
      // 3° elemento (non tutilizzato nel nostro caso) => possiamo passsare n° elementi da aggiungere (..items)
      this.users.splice(index, 1);
    }
  }

}

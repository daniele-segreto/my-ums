import { Injectable } from '@angular/core';
// import { User } from '../interfaces/user';
import { User } from '../classes/User'; // uso la classe anziché l’interfaccia
import { UserInterface } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  // In questo caso diciamo che users è un array di tipo User (attraverso i generics)
  // users: Array<User> = [...]

  // In questo caso indichiamo prima il tipo User, e poi utilizziamo le parentesi quadre per indicare che è un array
  // Anche questa volta come sopra diciamo che users è un array di tipo User (utilizziamo questo metodo perchè è più corto)
  // users: User[] = [...]

  users: User[] = [
    {
      id: 1, // mancavano gli id
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

  // Questo metodo riceve un utente (al momento di tipo any, per non fare lamentare TypeScript)
  deleteUser(user: User) {
    // andiamo a cercare l'indice dell'utente con il metodo index.Of
    // con 'indexOf' noi passiamo l'oggetto e ci deve ritornare l'indice (cioè dove si trova quell'elemento)
    const index = this.users.indexOf(user);
    // se 'indexOf' non trova l'elemento ci ritorna -1
    // quindi se l'indice è maggiore di -1 (quindi da 0 in poi), noi andiamo ad eliminare quell'elemento (l'utente) con 'splice'
    if (index > -1) {
      // il metodo 'splice' accetta come parametri:
      // 1° elemento => da quale posizione vogliamo cominciare a togliere l’elemento (da index, l'indice selezionato)
      // 2° elemento => quantità di elementi che vogliamo eliminare (in questo caso solo 1)
      // 3° elemento (non utilizzato nel nostro caso) => possiamo passare n° elementi da aggiungere (..items)
      this.users.splice(index, 1);
    }
  }

  // Metodo per aggiornare l'utente - riceve user di tipo userInterface (possiamo chiamare anche User invece di UserInterface, perchè tanto la classe implementa quell'interface)
  // 'findIndex' => serve a trovare l'indice di questo oggetto nell'array di 'users'
  updateUser(user: UserInterface) {
    const idx = this.users.findIndex((v) => v.id === user.id); // 'findIndex' aspetta in ingresso una funzione che tornerà true o false per il valore che vogliamo cercare, appena troverà un combaciamento con la condizione che stiamo passando, ritornerà quel valore e uscirà => dobbiamo verificare che l'id dell'utente che viene passato alla funzione sia uguale all'id dell'utente che ci viene passato per aggiornarlo, se tutti e due sono uguali, allora questa funzione 'findIndex' mi ritornerà l'index.
    alert(idx); // verifichiamo che esiste
    // verifichiamo che se l'idx (l'indice) è diverso da -1 (quindi vuol dire che lo ha trovato), allora noi andiamo ad aggiornare l'array
    if (idx !== -1) {
      this.users[idx] = {...user}; // l'utente alla posizione dell'indice è uguale al nuovo utente
    }
  }

  // Metodo per creare un nuovo utente
  createUser(user: UserInterface) {
    this.users.splice(0, 0, {...user}); // metto l'utente in testa al form, quindi con 'splice' dico che deve essere alla posizione 0, che non devo eliminare nessun record (di nuvo 0) e che voglio aggiungere un nuovo utente {...user}
  }

}

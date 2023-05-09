import { Injectable } from '@angular/core';
import { User } from '../classes/User';
import { UserInterface } from '../interfaces/user';
import { HttpClient } from '@angular/common/http'; // Importo il HttpClient per fare delle chiamate
import { environment } from '../../environments/environment'; // Importo environment per prendere la nostra APIURL
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiurl = environment.APIURL; // Salvo il valore 'http://localhost:3000/users' sulla variabile 'apiurl'

  // Inietto HttpClient per fare delle chiamate
  constructor(private http: HttpClient) { } // Lo tipifico a 'private' in modo da avere accesso a questa proprietà

  // OTTENGO LISTA UTENTI - Adesso ritorna un Observable (di tipo array di User), non più un semplice array di utenti (quindi bisogna specificarlo)
  getUsers(): Observable<User[]> { // *importo Observable da 'rxjs'
    return this.http.get<User[]>(this.apiurl); // tipifichiamo che questa get ritornerà un elenco di utenti
  }

  // OTTENGO SINGOLO UTENTE - Riceve un id e ritorna un Observable di User
  getUser(id: number): Observable<User> { // *
    return this.http.get<User>(this.apiurl + '/' + id); // tipifichiamo che questa get ritornerà un utente
  }

  // ELIMINO UTENTE - Ritorna un utente
  deleteUser(user: User) {
    return this.http.delete<User>(this.apiurl + '/' + user.id); // a differenza degli altri metodi inserisco 'delete' e 'user.id' per eliminare il singolo utente
  }

  // MODIFICO UTENTE - Ritorna un Observable di User
  updateUser(user: UserInterface): Observable<User> {
    return this.http.put<User>(this.apiurl + '/' + user.id, user); // a differenza degli altri metodi inserisco 'put' e 'user.id' per modificare il singolo utente, inoltre il metodo 'put' ha bisogno del 'body' della chiamata (in questo caso possiamo passare 'user')
  }

  // CREO NUOVO UTENTE - Ritorna un Observable di User
  createUser(user: UserInterface): Observable<User>  {
    return this.http.post<User>(this.apiurl + '/', user); // a differenza degli altri metodi inserisco 'post' per modificare il singolo utente, inoltre il metodo 'post' ha bisogno del 'body' della chiamata (in questo caso possiamo passare 'user') N.B. non abbiamo l'id (user.id) perchè è un utente nuovo, quindi va a scrivere una nuova risorsa su 'this.apiurl'
  }

}

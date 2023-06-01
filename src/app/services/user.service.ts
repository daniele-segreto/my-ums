import { Injectable } from '@angular/core';
import { User } from '../classes/User';
import { UserInterface } from '../interfaces/user';
import { HttpClient } from '@angular/common/http'; // Importo il HttpClient per fare delle chiamate
import { environment } from '../../environments/environment'; // Importo environment per prendere la nostra APIURL
import { Observable } from 'rxjs';

// Sul tutorial non mostra ancora questa parte:
interface UserResponse {
  data: User; // Contiene i dati dell'utente di tipo 'User'
  message: string, // Contiene un messaggio relativo all'operazione eseguita
  success: boolean // Indica se l'operazione è stata eseguita con successo
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiurl = environment.APIURL; // Salvo il valore 'http://localhost:3000/users' sulla variabile 'apiurl'

  // Inietto HttpClient per fare delle chiamate
  constructor(private http: HttpClient) { }

  // OTTENGO LISTA UTENTI
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiurl);
  }

  // OTTENGO SINGOLO UTENTE - Riceve un id e ritorna un Observable di User
  getUser(id: number): Observable<User> { // *
    return this.http.get<User>(this.apiurl + '/' + id);
  }

  // ELIMINO UTENTE - Riceve un utente
  deleteUser(user: User) {
    return this.http.delete<UserResponse>(this.apiurl + '/' + user.id);
  }

  // MODIFICO UTENTE - Ritorna un Observable di User
  updateUser(user: UserInterface): Observable<User> {
  // Effettua una richiesta HTTP DELETE all'API per eliminare l'utente specificato
  // Utilizza l'URL dell'API concatenato con l'ID dell'utente per formare l'URL completo della richiesta di eliminazione
  // Il tipo di dati di risposta atteso è UserResponse
    return this.http.put<User>(this.apiurl + '/' + user.id, user);
  }

  // CREO NUOVO UTENTE - Ritorna un Observable di User
  createUser(user: UserInterface): Observable<User>  {
    return this.http.post<User>(this.apiurl + '/', user);
  }

}

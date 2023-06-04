import { Injectable } from '@angular/core';
import { User } from '../classes/User';
import { UserInterface } from '../interfaces/user';
import { HttpClient } from '@angular/common/http'; // Importo il HttpClient per fare delle chiamate
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export interface UsersResponse {
  data: User[];
  message: string,
  success: boolean
}
export interface UserResponse {
  data: User;
  message: string,
  success: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiurl = environment.APIURL; // Salvo il valore 'http://localhost:8000/users' sulla variabile 'apiurl'

  constructor(private http: HttpClient) { }

  // OTTENGO LISTA UTENTI
  getUsers(): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(this.apiurl);
  }

  // OTTENGO SINGOLO UTENTE
  getUser(id: number): Observable<UserResponse> { // *
    return this.http.get<UserResponse>(this.apiurl + '/' + id);
  }

  // ELIMINO UTENTE
  deleteUser(user: User) {
    return this.http.delete<UserResponse>(this.apiurl + '/' + user.id);
  }

  // MODIFICO UTENTE
  updateUser(user: UserInterface): Observable<UserResponse> {
    return this.http.put<UserResponse>(this.apiurl + '/' + user.id, user);
  }

  // CREO NUOVO UTENTE
  createUser(user: UserInterface): Observable<UserResponse>  {
    return this.http.post<UserResponse>(this.apiurl + '/', user);
  }

}

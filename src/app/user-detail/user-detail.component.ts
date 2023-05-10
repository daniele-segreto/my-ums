import { Component, Input, OnInit } from '@angular/core';
import { User } from '../classes/User';
import { UserService } from '../services/user.service';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private userCopy!: User;
  private __user!: User;

  @Input() set user(user: User) {
    this.__user = user;
    this.userCopy = Object.assign({}, user);
  }

get user() {
  return this.__user;
}

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.user = new User();
    this.__user = new User();
    this.userCopy = new User();
  }

  ngOnInit(): void {
    // Questo codice si iscrive a eventuali cambiamenti nei parametri dell'URL
    this.route.params.subscribe(param => {
      // Verifica se l'ID è presente nei parametri dell'URL
      if (param['id']) {
        // Estrae l'ID dai parametri dell'URL e lo converte in un numero
        const id = Number(param['id']);
        // Chiama il servizio UserService per ottenere i dati dell'utente corrispondente all'ID
        // e assegna i dati dell'utente alla variabile 'user' tramite il metodo subscribe()
        this.userService.getUser(id)
          .subscribe(user => this.user = user);
      }
    });
  }

  // Questa funzione salva i dati dell'utente
  saveUser() {
    let obs; // obs sta per observable
    // Verifica se l'utente esiste già o è un nuovo utente
    if (this.user.id > 0) {
      // Se l'utente esiste già, chiama il metodo di UserService per aggiornare i dati dell'utente
      obs = this.userService.updateUser(this.user);
    } else {
      // Se l'utente è nuovo, chiama il metodo di UserService per creare un nuovo utente
      obs = this.userService.createUser(this.user);
    }
    // Si iscrive all'observable 'obs' per ricevere la risposta dal server
    obs.subscribe(resp => {
      // Stampa la risposta ricevuta dal server nella console
      console.log('response', resp);
      // Dopo aver salvato i dati dell'utente, naviga all'elenco degli utenti (indirizziamo l'utente alla pagina 'user')
      this.router.navigate(['users']);
    });
  }

  resetForm(form: FormGroup) {
    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.__user = this.userCopy;
    }
  }

}

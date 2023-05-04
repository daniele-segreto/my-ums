import { Component, Input, OnInit } from '@angular/core';
import { User } from '../classes/User';
import { UserService } from '../services/user.service';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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

  // Inietto il servizio ActivatedRoute (che ci viene messo a disposizione dal RouterModule)
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  // Quando la vista viene inizializzata
  // ngOnInit() {
    // this.user = new User(); // di default mettiamo 'user' vuoto, però non appena arriva il parametro (asincrono), noi andiamo a chiamare il servizio*

    // Attraverso il metodo 'subscribe' mi abbono al servizio ActivtedRoute
    // this.route.params.subscribe( // Quando viene attivata questa rotta noi abbiamo accesso a una variabile
      // (params) => { // ...a cui daremo il nome (ad esempio) di params
        // this.user = this.userService.getUser(+params.id); // questo è il metodo normale, per evitare problemi con TypeScript utilizziamo quello inserito sotto
        // this.user = this.userService.getUser(Number(params['id'])); // *inizializzo l'utente, caricando l'utente che si trova quell'id
        // in questo modo posso avere accesso all'id
      // }
    // )
  // }

  ngOnInit(): void {
    // Sottoscrizione ai cambiamenti dei parametri dell'URL
    this.route.params.subscribe(param => {
      // Estrazione dell'id dall'URL e conversione in numero
      const id = Number(param['id']); // '12'
      const user = this.userService.getUser(id); // Chiamata al servizio per recuperare l'utente in base all'id
      // Se l'utente esiste, lo assegna alla proprietà 'user' del componente...
      // ...altrimenti rimane l'utente predefinito, un utente vuoto (questo non succederà mai perchè in realtà, noi il parametro lo passeremo)
      if (user) {
        this.user = user;
      }
      // Nel senso, se cerchiamo per esempio 'localhost:4200/users/33/edit' non trova niente perchè è vuoto, quindi rimane l'utente vuoto
    })
  }

  saveUser() {
    if (this.user.id > 0) {
      this.userService.updateUser(this.user);
    } else {
      this.userService.createUser(this.user);
    }
  }

  resetForm(form: FormGroup) {
    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.__user = this.userCopy;
    }
  }

}

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
  constructor(private userService: UserService,private route: ActivatedRoute) {
    // Creo un nuovo oggetto della classe User e lo assegno alla proprietà user della classe
    this.user = new User();
    // Creo un nuovo oggetto della classe User e lo assegno alla proprietà __user della classe
    this.__user = new User();
    // Creo un nuovo oggetto della classe User e lo assegno alla proprietà userCopy della classe
    this.userCopy = new User();
  }

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
    // Dissociamo 'this.user' dall'utente precedentemente creato/modificato
    this.user = new User();
  }

  resetForm(form: FormGroup) {
    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.__user = this.userCopy;
    }
  }

}

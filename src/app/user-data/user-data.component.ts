import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { UserInterface } from '../interfaces/user';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  public user: UserInterface | undefined;

  constructor(private userService: UserService, private route: ActivatedRoute) {};

  ngOnInit(): void {
    // // Ascolto i cambiamenti dell'URL per recuperare i parametri (sottoscrivo a paraMap, non più a params)
    this.route.paramMap.subscribe(param => {
      // Recupero l'id dall'URL e lo converto in numero
      const id = Number(param.get('id'));
      // Se l'id è presente
      if (id) {
        // Chiamo il servizio per ottenere l'utente corrispondente all'id
        this.userService.getUser(id)
        // Ascolto la risposta del servizio e assegno l'utente alla variabile user
        .subscribe(user => this.user = user);
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { UserInterface } from '../interfaces/user'; // utilizziamo l'interface invece che la classe

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  // Inizializzo la variabile user (di tipo UserInterface o undefined)
  user: UserInterface | undefined;

  // Importo il servizio e ActivaredRoute
  // In questo caso non il router, perchè il router è per navigare
  // Per avere i dati (i parametri/params di navigazione che abbiamo definito in app.routing.module) dobbiamo utilizzare la classe ActivatedRoute, che in poche parole ci dà accessso alla rotta che è stata attivata
  // constructor(private userService: UserService, private route: Router) {};
  constructor(private userService: UserService, private route: ActivatedRoute) {};

  ngOnInit(): void {
    // Sottoscrizione ai cambiamenti dei parametri dell'URL
    this.route.params.subscribe(param => {
      // Estrazione dell'id dall'URL e conversione in numero
      const id = Number(param['id']); // '12'
      // Chiamata al servizio per recuperare l'utente in base all'id
      const user = this.userService.getUser(id);
      // Se l'utente esiste, lo assegna alla proprietà 'user' del componente
      if (user) {
        this.user = user;
      }
    })
  }

}

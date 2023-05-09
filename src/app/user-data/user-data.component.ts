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
    // Sottoscrizione ai parametri della route attuale
    this.route.params.subscribe(param => {
      // Estrazione del parametro 'id' dai parametri della route e conversione in numero
      const id = Number(param['id']);
      // Chiamata al servizio userService per recuperare l'utente con l'id specificato
      this.userService.getUser(id)
        // Sottoscrizione all'Observable restituito dal servizio
        .subscribe(user => this.user = user);
    });
  }

}

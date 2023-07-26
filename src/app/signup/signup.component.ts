import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor (private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  // Metodo di registrazione (che prende un argomento di tipo "NgForm")
  signUp(form: NgForm)  {
    // Verifico la validità del form (lo lascio commentato per scopi di debug)
    // alert(form.valid);

    // Chiamo il metodo "signUp" dell'oggetto "auth", con i valori prelevati dai campi del form: nome, email e password. Il risultato viene memorizzato nella variabile "result".
    let result = this.auth.signUp(form.value.name, form.value.email, form.value.password);

    // Verifica se "result" è falso (falsy). Se è falso, la funzione termina prematuramente e non procede oltre.
    if (!result) {
      return ;
    }

    // Se "result" è vero (indicando una registrazione avvenuta con successo), questa riga effettua una navigazione verso la radice del percorso ('/'). Probabilmente reindirizza l'utente alla pagina principale o a una dashboard dopo una registrazione riuscita.
    this.router.navigate([''])
  }

}

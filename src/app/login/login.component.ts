import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; // Importo ngFormn
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  // Inietto AuthService e Router
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() { }

  // Metodo di accesso chiamato quando il form viene inviato
  signIn(form: NgForm): boolean {
    // Verifica se il form è valido, se non lo è, restituisce false e non procede con il login
    if (!form.valid) {
      return false;
    }

    // Il form è valido, quindi procede con il login chiamando la funzione di signIn e passando i valori di email e password dal form
    let result = this.auth.signIn(form.value.email, form.value.password);

    // Controlla il risultato del login
    if (result) {
      // Se il login è riuscito (result è true), naviga verso la pagina principale ('').
      this.router.navigate(['']);
    }

    // Restituisce true, indicando che il login è stato effettuato con successo
    return true;
  }

}

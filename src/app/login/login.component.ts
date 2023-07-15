import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; // Importo ngFormn

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor() {}

  ngOnInit() { }

  // Metodo di accesso chiamato quando il form viene inviato
  signIn(form: NgForm) {
    alert(form.valid); // Avviso per mostrare se il form è valido o meno
    alert(form.value.email); // Avviso per mostrare il valore dell'email inserita
  }
}

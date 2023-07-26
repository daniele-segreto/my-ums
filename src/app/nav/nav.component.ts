import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Importo AuthService
import { Router } from '@angular/router'; // Importo il Router

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Output() onNewUser = new EventEmitter();

  // variabile che indica se l'utente è loggato (true) o no (false)
  isUserLoggedIn = false; // (sul video era private, ma in questo modo la variabile non era accessibile)

  // Inietto il Servizio 'AuthService' che serve a fare il Login e il Logout e il Router in modo tale che possiamo ridirezionare l'utente
  constructor (private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.isUserLoggedIn = this.auth.isUserLoggedIn(); // assegno alla variabile isUserLoggedIn, il fatto che l'utente sia loggato o meno (inizializzata su AuthService a 'true')
  }

  newUser() {
    this.onNewUser.emit();
  }

  // Logout
  logout(e: any) {
    e.preventDefault(); // passiamo l0evento come e e lo mettiamo come preventDefault()
    this.auth.logout(); // chiamo il metodo logout da AuthService
    this.router.navigate(['login']) // tramite il router direzioniamo l'utente verso la pagina di 'login'
  }

  // SignIn
  signIn(e: any) {
    e.preventDefault();
    this.router.navigate(['login']); // Nella parte di signIn, mandiamo l'utente alla pagine 'login'
  }

  // SignUp
  signUp(e: any) {
    e.preventDefault();
    this.router.navigate(['signup']); // Nella parte di signUp, mandiamo l'utente alla pagine 'signup'
  }
}

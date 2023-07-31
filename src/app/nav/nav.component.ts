import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Importo AuthService
import { Router } from '@angular/router'; // Importo il Router
import { User } from '../classes/User';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Output() onNewUser = new EventEmitter();

  // variabile che indica se l'utente è loggato (true) o no (false)
  isUserLoggedIn = false; // (sul video era private, ma in questo modo la variabile non era accessibile)

  // dichiaro la variabile username
  username: string | undefined; // (sul video la variabile di acccesso è private, ma in questo modo non abbiamo accesso tramite il template)

  // Inietto il Servizio 'AuthService' che serve a fare il Login e il Logout e il Router in modo tale che possiamo ridirezionare l'utente
  constructor (private auth: AuthService, private router: Router) {
    // Qui vengono impostati gli ascoltatori per gli eventi emessi dal servizio 'AuthService':

    // Ascolto dell'evento 'usersignedin' emesso dal servizio 'AuthService' quando un utente effettua il login.
    auth.usersignedin.subscribe(
      // All'evento di login, viene eseguita questa funzione callback con il parametro 'user', che rappresenta l'oggetto utente appena loggato.
      (user: User) => {
        this.username = user.name; // Imposta il nome utente del 'user' loggato nella variabile 'username'.
        this.isUserLoggedIn = true; // Imposta la variabile 'isUserLoggedIn' a true per indicare che l'utente è loggato.
      }
    );

    // Ascolto dell'evento 'userlogout' emesso dal servizio 'AuthService' quando un utente effettua il logout.
    auth.userlogout.subscribe(
      // All'evento di logout, viene eseguita questa funzione callback senza alcun parametro.
      () => {
        this.username = ''; // Resettiamo la variabile 'username' impostandola come stringa vuota per indicare che non c'è alcun utente loggato.
        this.isUserLoggedIn = false; // Imposta la variabile 'isUserLoggedIn' a false per indicare che l'utente non è loggato.
      }
    );

    // Ascolto dell'evento 'usersignedup' emesso dal servizio 'AuthService' quando un utente viene registrato.
    auth.usersignedup.subscribe(
      // All'evento di registrazione, viene eseguita questa funzione callback con il parametro 'user', che rappresenta l'oggetto utente appena registrato.
      (user: User) => {
        this.username = user.name; // Imposta il nome utente del 'user' registrato nella variabile 'username'.
        this.isUserLoggedIn = true; // Imposta la variabile 'isUserLoggedIn' a true per indicare che l'utente è loggato.
      }
    );
  }

  ngOnInit() {
    this.isUserLoggedIn = this.auth.isUserLoggedIn(); // assegno alla variabile isUserLoggedIn, il fatto che l'utente sia loggato o meno (inizializzata su AuthService a 'true')
  }

  newUser() {
    this.onNewUser.emit();
  }

  // Logout
  logout(e: any) {
    e.preventDefault(); // passiamo l'evento e lo mettiamo come preventDefault()
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

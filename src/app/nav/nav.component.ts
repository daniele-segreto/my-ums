import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  // Creo l'evento onNewUser, cioò quello che dobbiamo ascoltare su app.component.html
  @Output() onNewUser = new EventEmitter();

  newUser() {
    this.onNewUser.emit(); // emett l'evento in modo che possa essere catturato dal componente padre
  }
}

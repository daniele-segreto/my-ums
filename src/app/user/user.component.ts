import { Component, Input } from '@angular/core';

@Component({
  selector: 'tr[app-user]', // selezione un elemento 'tr' che abbia come attributo [app-user]
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  // RICEVO I DATI DAL COMPONENTE PADRE:
  // Ricevo in input dei valori attraverso quest variabile dall'esterno
  @Input('user-data') user: any; // 'user-data' è un alias esterno

  // Non è necessario passare il parametro user, lo abbiamo già ricevuto in @Input (sopra)
  // deleteUser(user: any) {
  //   alert(user.lastname)
  // }

  // Quindi accediamo al parametro user tramite il this
  deleteUser() {
    alert(this.user.lastname)
  }

}

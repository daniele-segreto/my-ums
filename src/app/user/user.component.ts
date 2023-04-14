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

}

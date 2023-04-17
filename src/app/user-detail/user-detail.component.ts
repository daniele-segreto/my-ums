import { Component, Input } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  // Dichiaro la variabile con @Ipunt per far riceverla a form-detail
  @Input() user: User; // ho tolto undefined in modo da

  // Finchè non creiamo una classe user che possiamo instanziare e creare un oggetto nuovo, possiamo inizializzare sia quì (nel costruttore), che in user-detail.component.ts, un oggetto con le stesse proprietà della interface e con i valori vuoti
  constructor() {
    this.user = {
      name: '',
      lastname: '',
      email: '',
      fiscalcode: '',
      province: '',
      phone: '',
      age: 0,
    }
  }

}

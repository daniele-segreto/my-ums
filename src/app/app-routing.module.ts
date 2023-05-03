import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserService } from './services/user.service';

const routes: Routes = [
  {
    path: 'users', // la path dell'url con cui andiamo a fare un confronto
    pathMatch: 'full', // deve coincidere perfettamente con la parola inserita sul path
    component: UsersComponent // specificare il componente da caricare quando visitiamo questa rotta
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users', // quando abbiamo una url vuota (in questo caso), viene direzionata a questa path
  },
  {
    path: 'users/new', // questa è la rotta per quando creiamo un nuovo utente
    component: UserDetailComponent
  }
];

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    FontAwesomeModule,
    CommonModule // Serve per poter utilizzare le Direttive dei nostri Componenti
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

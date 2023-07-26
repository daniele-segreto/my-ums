import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserService } from './services/user.service';
import { UserDataComponent } from './user-data/user-data.component';
import { RouteGuardService } from './route-guard.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'users',
    pathMatch: 'full',
    component: UsersComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users',
  },
  {
    path: 'users/new',
    component: UserDetailComponent,
    canActivate: [RouteGuardService] // Protegge la rotta, cioè non permette all'utente di accedervi
  },
  {
    path: 'users/:id/edit',
    component: UserDetailComponent,
  },
  {
    // con 'http://localhost:4200/users/1' possiamo vedere ciò che abbiamo sul componente 'user-data'
    path: 'users/:id',
    component: UserDataComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full' // corrispondenza completa
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full' // corrispondenza completa
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
    CommonModule
  ],
  exports: [RouterModule],
  providers: [
    RouteGuardService, // Fornisce l'istanza del servizio RouteGuardService per l'iniezione di dipendenze
  ]
})
export class AppRoutingModule { }

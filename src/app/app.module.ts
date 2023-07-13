import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UserDataComponent } from './user-data/user-data.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component'; // Importo il Componente Login

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserDataComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [UserService, AuthService], // Ho inserito i servizi nei Providers
  bootstrap: [AppComponent]
})
export class AppModule { }

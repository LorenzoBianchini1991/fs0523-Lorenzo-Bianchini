import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.username, this.password)
      .subscribe(
        response => {
          if (response.length > 0) {
            console.log('Login riuscito!', response);
            localStorage.setItem('authToken', 'your-token');
          } else {
            console.error('Errore nel login: Utente non trovato');
          }
        },
        error => console.error('Errore nel login', error)
      );
  }
}

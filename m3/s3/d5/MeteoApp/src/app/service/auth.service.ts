import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersUrl = 'http://localhost:3000/users'; // URL per gli utenti

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    // Cerca l'utente nel 'db.json'
    return this.http.get<any[]>(`${this.usersUrl}?username=${username}&password=${password}`);
  }

  // Metodo per il logout
  logout() {
    localStorage.removeItem('authToken');
  }

  // Metodo per controllare se l'utente è loggato
  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }
  
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private apiUrl = 'http://localhost:3000/favorites'; 
  
  constructor(private http: HttpClient) {}

  getFavorites(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addFavorite(city: string): Observable<any> {
    return this.http.post(this.apiUrl, { city });
  }

  removeFavorite(cityId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${cityId}`);
  }
}

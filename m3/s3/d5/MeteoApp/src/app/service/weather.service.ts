import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) { }

  getWeatherForCity(city: string) {
    const url = `${this.baseUrl}/weather?q=${city}&appid=${environment.openWeatherMapApiKey}`;
    return this.http.get(url);
  }

  getCoordinatesForCity(city: string) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${environment.openWeatherMapApiKey}`;
    return this.http.get(url);
  }
}

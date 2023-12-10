import { Component, Input } from '@angular/core';
import { FavoritesService } from '../service/favorites.service';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent {
  @Input() weatherData: any;
  favoriteCities: any[] = [];

  constructor(private favoritesService: FavoritesService) {}

  addToFavorites(cityName: string) {
    this.favoritesService.addFavorite(cityName).subscribe(
      response => {
        console.log('Aggiunto ai preferiti', response);
        this.loadFavorites(); // Ricarica i preferiti
      },
      error => console.error('Errore nell aggiungere ai preferiti', error)
    );
  }
  
  loadFavorites() {
    this.favoritesService.getFavorites().subscribe(
      data => this.favoriteCities = data,
      error => console.error('Errore nel caricare i preferiti', error)
    );
  }
}

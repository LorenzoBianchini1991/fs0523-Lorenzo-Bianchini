import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../service/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoriteCities: any[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favoritesService.getFavorites().subscribe(
      data => {
        console.log(data);
        this.favoriteCities = data;
      },
      error => console.error('Errore nel caricare i preferiti', error)
    );
  }

  removeFromFavorites(cityId: number) {
    this.favoritesService.removeFavorite(cityId).subscribe(
      () => this.loadFavorites(), // Ricarica i preferiti dopo la rimozione
      error => console.error('Errore nella rimozione dai preferiti', error)
    );
  }
}

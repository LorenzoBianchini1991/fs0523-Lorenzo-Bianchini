import { Component, EventEmitter, Output } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrl: './city-search.component.css'
})
export class CitySearchComponent {
  @Output() weatherFound = new EventEmitter<any>();
  cityName: string = '';

  constructor(private weatherService: WeatherService) {}

  searchCity() {
    if (this.cityName) {
      this.weatherService.getWeatherForCity(this.cityName)
        .subscribe(
          data => {
            console.log(data);
            this.weatherFound.emit(data); // Emette i dati quando trovati
          },
          error => console.error(error)
        );
    }
  }
}

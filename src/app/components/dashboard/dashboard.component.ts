import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { AlertService } from '../../services/alert.service';
import { Weather } from '../../models/weather.model';
import { CommonModule } from '@angular/common';
import { TemperaturePipe } from '../../pipes/temperature.pipe';
import { CitySelectorComponent } from '../city-selector/city-selector.component';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TemperaturePipe, CitySelectorComponent, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  city: string = 'Cairo';
  weatherData?: Weather;

  constructor(
    private weatherService: WeatherService,
    private alertService: AlertService
  ) {}

  onCitySelected(city: string) {
    this.city = city;
    this.fetchWeather();
  }
submitCity() {
    this.fetchWeather();
  }
  fetchWeather() {
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
      },
      error: () => {
        this.alertService.showAlert('Could not fetch weather data.');
      }
    });
  }
}

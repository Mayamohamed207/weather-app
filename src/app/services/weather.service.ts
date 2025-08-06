import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = '3ca1bee714ef2dbbe69d3ea8fdd6eed3';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> { 
    return this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`).pipe();
  }
}

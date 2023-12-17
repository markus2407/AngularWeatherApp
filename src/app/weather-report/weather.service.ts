import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from './weather-data';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  http = inject(HttpClient);

  getWeatherForCity(city: string): Observable<WeatherData> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=695ed9f29c4599b7544d0db5c211d499`;
    return this.http.get<WeatherData>(url);
  }
}

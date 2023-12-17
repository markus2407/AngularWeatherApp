import { Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from './weather-report/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  readonly weatherService = inject(WeatherService);
  readonly router = inject(Router);
  cityControl: FormControl | undefined;

  readonly cities = ['Wien', 'Graz', 'Leibnitz'];
  selectedCity = '';
  jsonData: any;

  ngOnInit(): void {
    this.cityControl = new FormControl('');
    this.cityControl.valueChanges.subscribe((value => {
      this.router.navigate([value]);
      console.log('Value: ', value);
    }));
  }

  updateWeatherData(): void {
    this.weatherService.getWeatherForCity(this.selectedCity).subscribe(data => {
      this.jsonData = data;
    });
  }
}

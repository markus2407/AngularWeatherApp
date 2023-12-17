import { Component, Input, OnInit, inject } from '@angular/core';
import { WeatherService } from './weather.service';
import { WeatherData } from './weather-data';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrl: './weather-report.component.scss'
})
export class WeatherReportComponent implements OnInit {
  @Input({required: true}) jsonData!: WeatherData;
  today = new Date();

  ngOnInit(): void {
    console.log(this.jsonData);
  }
}

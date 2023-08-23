import {Component, OnInit} from '@angular/core';
import { IWeather } from "../../../services/weather/weather.interface";
import { WeatherService } from "../../../services/weather/weather.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  cities_weather: IWeather[] = []

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getAll().subscribe(data => {
      this.cities_weather = data
    })
  }


}

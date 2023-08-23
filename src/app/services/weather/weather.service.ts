import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IWeather } from "./weather.interface";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  API_URL = 'http://localhost:3000/weather'

  getAll() {
    return this.http.get<IWeather[]>(this.API_URL)
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { WeatherService } from "../../../services/weather/weather.service";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [WeatherService]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/ui/layout/layout.component';
import { HeaderComponent } from "./components/ui/layout/header/header.component";
import { MatIconModule } from "@angular/material/icon";
import { SearchComponent } from './components/screens/search/search.component';
import { WeatherComponent } from './components/screens/weather/weather.component';
import { FavoriteComponent } from './components/screens/favorite/favorite.component';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { HomeModule } from "./components/screens/home/home.module";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SearchComponent,
    WeatherComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    CommonModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

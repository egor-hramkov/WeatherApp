import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/ui/layout/layout.component';
import { HeaderComponent } from "./components/ui/layout/header/header.component";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/screens/search/search.component';
import { WeatherComponent } from './components/screens/weather/weather.component';
import { FavoriteComponent } from './components/screens/favorite/favorite.component';

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
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

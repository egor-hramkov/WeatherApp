import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/ui/layout/layout.component';
import { HeaderComponent } from "./components/ui/layout/header/header.component";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    RouterModule.forRoot([
            {path: 'home', component: AppComponent},
            {path: 'search', component: AppComponent},
            {path: 'weather', component: AppComponent},
            {path: 'favorite', component: AppComponent},
        ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

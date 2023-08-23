import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/screens/home/home.component";

const routes: Routes = [
            {path: '', component: HomeComponent},
            {path: 'search', component: AppComponent},
            {path: 'weather', component: AppComponent},
            {path: 'favorite', component: AppComponent},
        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

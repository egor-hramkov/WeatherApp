import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from "./header/header.module";
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule
  ]
})
export class LayoutModule { }

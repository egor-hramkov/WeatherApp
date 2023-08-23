import { Component } from '@angular/core';
import { IMenuItem } from "./header.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuItems: IMenuItem[] = [
    {
      path: '',
      icon: 'home'
    },
    {
      path: '/search',
      icon: 'search'
    },
    {
      path: '/weather',
      icon: 'thermostat'
    },
    {
      path: '/favorite',
      icon: 'favorite'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

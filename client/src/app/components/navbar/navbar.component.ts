import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="nav-content">
        <a routerLink="/" class="brand">Shopping List</a>
        <div class="nav-links">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/preferences" routerLinkActive="active">Preferences</a>
          <a routerLink="/cart" routerLinkActive="active">Cart</a>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {}

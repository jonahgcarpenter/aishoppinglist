import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="navbar glass">
      <div class="nav-content">
        <a routerLink="/" class="brand desktop-only"><i class="fas fa-cart-arrow-down"></i> Smart Cart</a>
        <div class="nav-links">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
            <i class="fas fa-home"></i>
            <span>Home</span>
          </a>
          <a routerLink="/preferences" routerLinkActive="active">
            <i class="fas fa-cog"></i>
            <span>Preferences</span>
          </a>
          <a routerLink="/cart" routerLinkActive="active">
            <i class="fas fa-shopping-cart"></i>
            <span>Cart</span>
          </a>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // No additional logic needed
}

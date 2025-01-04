import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="navbar">
      <div class="nav-content">
        <a routerLink="/" class="brand">
          🛒 AI Shopping List
        </a>
        <button 
          class="hamburger" 
          [class.open]="isMenuOpen" 
          (click)="toggleMenu()"
          aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="nav-links" [class.open]="isMenuOpen">
          <a routerLink="/" 
             routerLinkActive="active" 
             [routerLinkActiveOptions]="{exact: true}"
             (click)="closeMenu()">
            Home
          </a>
          <a routerLink="/preferences" 
             routerLinkActive="active"
             (click)="closeMenu()">
            Preferences
          </a>
          <a routerLink="/cart" 
             routerLinkActive="active"
             (click)="closeMenu()">
            Cart
          </a>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.classList.toggle('menu-open');
  }

  closeMenu() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      document.body.classList.remove('menu-open');
    }
  }
}

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { MyPreferencesComponent } from './pages/my-preferences/my-preferences.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'preferences', component: MyPreferencesComponent },
  { path: '**', redirectTo: '' }
];

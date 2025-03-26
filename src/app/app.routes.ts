import { Routes } from '@angular/router';
import { HomePage } from './home/home.component';
import { ProductPage } from './product/product.component';
import { CartPage } from './cart/cart.component';
import { DashboardPage } from './dashboard/dashboard.component';
import { authGuard } from './auth/auth.guard';
import { LoginPage } from './login/login.component';

/* export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePage },
  { path: 'product', component: ProductPage, canActivate: [authGuard] },
  { path: 'cart', component: CartPage, canActivate: [authGuard] },
  { path: 'dashboard', component: DashboardPage, canActivate: [authGuard] },
  { path: 'login', component: LoginPage },
  { path: 'add-product', component: ProductPage, canActivate: [authGuard] },
]; */

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePage },
  { path: 'product', component: ProductPage },  // Removed authGuard temporarily
  { path: 'cart', component: CartPage },        // Removed authGuard temporarily
  { path: 'dashboard', component: DashboardPage, canActivate: [authGuard] },
  { path: 'add-product', component: ProductPage },  // Removed authGuard temporarily
  { path: 'login', component: LoginPage },
];

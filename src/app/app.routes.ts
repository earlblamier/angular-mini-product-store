import { Routes } from '@angular/router';
import { HomePage } from './auth/pages/home/home.component';
import { ProductPage } from './auth/pages/product/product.component';
import { CartPage } from './auth/pages/cart/cart.component';
import { DashboardPage } from './auth/pages/dashboard/dashboard.component';
import { authGuard } from './auth/auth.guard';
import { LoginPage } from './auth/login/login.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePage },
  { path: 'product', component: ProductPage, canActivate: [authGuard] },
  { path: 'cart', component: CartPage, canActivate: [authGuard] },
  { path: 'dashboard', component: DashboardPage, canActivate: [authGuard] },
  { path: 'login', component: LoginPage }
];
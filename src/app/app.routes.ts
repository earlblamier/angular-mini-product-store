import { Routes } from '@angular/router';
import { HomePage } from './home/home.component';
import { ProductPage } from './product/product.component';
import { CartPage } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginPage } from './login/login.component';
import { ContactComponent } from './contact/contact.component';

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
  { path: 'product', component: ProductPage, canActivate:[AuthGuard] },  // Removed authGuard temporarily
  { path: 'cart', component: CartPage },        // Removed authGuard temporarily
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'add-product', component: ProductPage, canActivate: [AuthGuard] },  // Removed authGuard temporarily
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginPage },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect root to login
];

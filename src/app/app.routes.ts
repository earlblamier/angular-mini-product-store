import { Routes } from '@angular/router';
import { HomePage } from './home/home.component';
import { ProductPage } from './product/product.component';
import { CartPage } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginPage } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AddProductComponent } from './product/add-product/add-product.component';

export const routes: Routes = [
  { path: '', component: HomePage }, // Root path as home (public route)
  { path: 'home', component: HomePage }, // Home route (public route)
  { path: 'product', component: ProductPage }, // Protected route
  { path: 'cart', component: CartPage, canActivate: [AuthGuard] }, // Protected route
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'add-product', component: AddProductComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'contact', component: ContactComponent }, // Public route
  { path: 'login', component: LoginPage }, // Public route
];
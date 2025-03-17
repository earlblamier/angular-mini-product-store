import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { ProductPage } from './pages/product/product.component';
import { CartPage } from './pages/cart/cart.component';
import { DashboardPage } from './pages/dashboard/dashboard.component';


export const routes: Routes = [
    //{ path: '', component: HomeComponent },
    { path: '', pathMatch: 'full', component: HomePage },
    { path: 'product', component: ProductPage },
    { path: 'cart', component: CartPage },
    { path: 'dashboard', component: DashboardPage},
];

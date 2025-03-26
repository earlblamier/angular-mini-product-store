import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.authService.isAuthenticated(); // Check authentication status

    if (!isLoggedIn) {
      console.log('AuthGuard: User not authenticated, redirecting to login.');
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } }); // Redirect to login with return URL
      return false;
    }

    console.log('AuthGuard: Access granted.');
    return true;
  }
}
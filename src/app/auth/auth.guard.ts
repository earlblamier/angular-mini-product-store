import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  // Get authentication status synchronously
  const isLoggedIn = authService.isAuthenticated();

  if (!isLoggedIn) {
    console.log('AuthGuard: User not authenticated, redirecting to login.');
    router.navigate(['/login']);
    return false;
  }

  console.log('AuthGuard: Access granted.');
  return true;
};

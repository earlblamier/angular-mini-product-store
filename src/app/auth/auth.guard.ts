import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);  // Inject AuthService

  // Check if the user is logged in by checking the authentication state
  const isLoggedIn = authService.isAuthenticatedUser;  // ✅ Correct way to access signal
  // Check from AuthService

  if (!isLoggedIn) {
    // If not logged in, redirect to the login page
    router.navigate(['/login']);
    return false;
  }

  return true;
};

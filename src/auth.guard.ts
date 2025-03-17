import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  // Replace this with your actual login check logic
  const isLoggedIn = false; // Example login check, replace with real logic

  if (!isLoggedIn) {
    // If not logged in, redirect to the login page
    router.navigate(['/login']);
    return false;
  }

  return true;
};

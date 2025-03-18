// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticated: boolean = false;  // Track authentication state

  constructor() { }

  // Method to authenticate the user
  login(username: string, password: string): boolean {
    // Simple login check for demonstration (replace with real logic)
    if (username === 'admin' && password === 'password') {
      this.isAuthenticated = true;
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  // Method to check if the user is authenticated
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}

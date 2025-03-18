// src/app/auth/auth.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSignal = signal(false);  // Track authentication state

  constructor() { }

  // Method to authenticate the user
  login(username: string, password: string): boolean {
    // Reset authentication state before attempting login
    this.isAuthenticatedSignal.set(false);
  
    // Simple login check for demonstration (replace with real logic)
    if (username === 'admin' && password === 'password') {
      this.isAuthenticatedSignal.set(true);  // Set as authenticated
      return true;
    }
    // If authentication fails, set to false (not really necessary since it's already done, but keeps the logic clear)
    this.isAuthenticatedSignal.set(false);
    return false;
  }

  // Getter for the authentication state
  get isAuthenticatedUser() {
    return this.isAuthenticatedSignal;  // No function call needed
  }

  // logout method
  logout() {
    this.isAuthenticatedSignal.set(false);  // User logged out
  }
}

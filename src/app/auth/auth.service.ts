import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSignal = signal(false); // Signal to track authentication state

  constructor() {}

  // Method to authenticate the user
  login(username: string, password: string): boolean {
    // Reset authentication state before attempting login
    this.isAuthenticatedSignal.set(false);

    // Simple login check for demonstration (replace with real logic)
    if (username === 'admin' && password === 'password') {
      this.isAuthenticatedSignal.set(true); // Set as authenticated
      return true;
    }
    // If authentication fails
    this.isAuthenticatedSignal.set(false);
    return false;
  }

  // Getter for the authentication state
  get isAuthenticatedUser() {
    return this.isAuthenticatedSignal;  // Return the signal
  }

  // logout method
  logout() {
    this.isAuthenticatedSignal.set(false);  // Set the user as not authenticated
  }
}

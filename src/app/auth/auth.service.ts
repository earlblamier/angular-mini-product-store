import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.getAuthFromLocalStorage());
  isAuthenticatedUser = this.isAuthenticatedSubject.asObservable();

  constructor() {}

  // Method to authenticate the user
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'password') {
      this.isAuthenticatedSubject.next(true);
      this.setAuthToLocalStorage(true); // Store auth status in localStorage
      return true;
    }
    this.isAuthenticatedSubject.next(false);
    this.setAuthToLocalStorage(false); // Ensure no leftover auth state
    return false;
  }

  // Logout method
  logout(): void {
    this.isAuthenticatedSubject.next(false);
    this.setAuthToLocalStorage(false); // Remove auth status
  }

  // Getter to check authentication status synchronously
  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.getValue();
  }

  // Load auth state from localStorage
  private getAuthFromLocalStorage(): boolean {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('isAuthenticated') === 'true';
    }
    return false; // Default to false if localStorage is not available
  }

  // Save auth state to localStorage
  private setAuthToLocalStorage(isAuthenticated: boolean): void {
    if (typeof localStorage !== 'undefined') {
      if (isAuthenticated) {
        localStorage.setItem('isAuthenticated', 'true');
      } else {
        localStorage.removeItem('isAuthenticated');
      }
    }
  }
}
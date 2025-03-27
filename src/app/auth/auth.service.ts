  import { Injectable } from '@angular/core';
  import { BehaviorSubject } from 'rxjs';
  import { Router } from '@angular/router';
  
  @Injectable({
    providedIn: 'root',
  })
  export class AuthService {
    private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.getAuthFromLocalStorage());
    
    // Expose the authentication state as an observable
    isLoggedIn$ = this.isAuthenticatedSubject.asObservable();
  
    constructor(private router: Router) {}
  
    // Method to authenticate the user
    login(username: string, password: string): boolean {
      if (username === 'admin' && password === 'password') {
        console.log('AuthService.login: Login successful');
        this.isAuthenticatedSubject.next(true);
        this.setAuthToLocalStorage(true); // Store auth status in localStorage
        return true;
      }
      console.log('AuthService.login: Login failed');
      this.isAuthenticatedSubject.next(false);
      this.setAuthToLocalStorage(false); // Ensure no leftover auth state
      return false;
    }
  
    // Logout method
    logout(redirectUrl: string = '/login'): void {
      this.isAuthenticatedSubject.next(false);
      this.setAuthToLocalStorage(false); // Remove auth status
      this.clearUserData(); // Clear user data
      console.log('User logged out successfully');
      this.router.navigate([redirectUrl]); // Use Angular Router for navigation
    }
  
    // Getter to check authentication status synchronously
    isAuthenticated(): boolean {
      return this.isAuthenticatedSubject.getValue();
    }
  
    // Load auth state from localStorage
    private getAuthFromLocalStorage(): boolean {
      try {
        if (this.isLocalStorageAvailable()) {
          return localStorage.getItem('isAuthenticated') === 'true';
        }
      } catch (error) {
        console.error('Error accessing localStorage:', error);
      }
      return false; // Default to false if localStorage is not available
    }
  
    // Save auth state to localStorage
    private setAuthToLocalStorage(isAuthenticated: boolean): void {
      try {
        if (this.isLocalStorageAvailable()) {
          if (isAuthenticated) {
            localStorage.setItem('isAuthenticated', 'true');
          } else {
            localStorage.removeItem('isAuthenticated');
          }
        }
      } catch (error) {
        console.error('Error accessing localStorage:', error);
      }
    }
  
    // Check if localStorage is available
    private isLocalStorageAvailable(): boolean {
      try {
        return typeof localStorage !== 'undefined';
      } catch (error) {
        console.error('localStorage is not available:', error);
        return false;
      }
    }
  
    // Clear user-related data
    private clearUserData(): void {
      console.log('User data cleared');
      // Add logic to clear additional user-related data if needed
    }
  }
  
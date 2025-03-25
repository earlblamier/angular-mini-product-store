import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false); // BehaviorSubject to track authentication state
  isAuthenticatedUser = this.isAuthenticatedSubject.asObservable(); // Expose as Observable

  constructor() {}

  // Method to authenticate the user
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'password') {
      this.isAuthenticatedSubject.next(true); // Set as authenticated
      return true;
    }
    this.isAuthenticatedSubject.next(false);
    return false;
  }

  // Logout method
  logout() {
    this.isAuthenticatedSubject.next(false); // Set the user as not authenticated
  }

  // Getter to check authentication status synchronously
  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.getValue(); // Allows synchronous check
  }
}

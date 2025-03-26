/* import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service'; // Ensure the correct path
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isAuthenticated: boolean = false; // Tracks authentication status

  constructor(private authService: AuthService, private router: Router) {} */

  /* ngOnInit(): void {
    this.authService.isAuthenticatedUser.subscribe((authStatus) => {
      console.log('Auth Status Changed:', authStatus);
      this.isAuthenticated = authStatus;
    });
  } */
/*   
    ngOnInit(): void {
      this.isAuthenticated = this.authService.isAuthenticated();
      console.log('isAuthenticated:', this.isAuthenticated);
    }
  

  onSignOut(): void {
    this.authService.logout();
    console.log('User signed out');
    this.router.navigate(['/']);
  }
  
} */


import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service'; // Ensure the correct path
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isAuthenticated: boolean = false; // Tracks authentication status

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.isAuthenticatedUser.subscribe((authStatus) => {
      this.isAuthenticated = authStatus;
      console.log('DashboardComponent.isAuthenticated:', this.isAuthenticated);
    });
  }

  onSignOut(): void {
    this.authService.logout(); // Call logout method from AuthService
    console.log('User signed out');
    this.router.navigate(['/']); // Redirect to the login page
  }
}
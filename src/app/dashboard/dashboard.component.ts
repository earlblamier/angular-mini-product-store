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
    // Get the authentication status from AuthService
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  onSignOut(): void {
    this.authService.logout(); // Call logout method from AuthService
    console.log('User signed out');

    // Redirect to the login page
    this.router.navigate(['/']);
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service'; // Ensure this is the correct path

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, FormsModule] // Add CommonModule and FormsModule for template functionality
})
export class LoginPage {
  username: string = ''; // Two-way bound to the username input field
  password: string = ''; // Two-way bound to the password input field

  constructor(private authService: AuthService, private router: Router) {}

  onFormSubmit() {
    if (this.username && this.password) {
      if (this.authService.login(this.username, this.password)) {
        console.log('Login successful'); // Log success
  
        // Get the returnUrl from query parameters or default to '/dashboard'
        const returnUrl = this.router.routerState.snapshot.root.queryParams['returnUrl'] || '/dashboard';
        this.router.navigate([returnUrl]); // Redirect to the original page or dashboard
      } else {
        console.error('Invalid credentials'); // Log error
        alert('Invalid credentials!'); // Show alert for invalid credentials
      }
    } else {
      console.warn('Username or password is empty'); // Log warning
      alert('Please fill in both username and password!'); // Show alert for empty fields
    }
  }
}
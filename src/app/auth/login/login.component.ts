import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngIf
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';  // Ensure this is the correct path

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, FormsModule]  // Add CommonModule here
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/product']);  // Redirect to Product page
    } else {
      alert('Invalid credentials!');
    }
  }
}

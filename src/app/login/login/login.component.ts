import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../auth/auth.service';
import { Router } from '@angular/router';  // Import Router for redirection

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [FormsModule]
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  login() {
    const isAuthenticated = this.authService.login(this.username, this.password);
    if (isAuthenticated) {
      this.router.navigate(['/product']);  // Navigate to the Product page after successful login
    } else {
      alert('Invalid credentials!');
    }
  }
}
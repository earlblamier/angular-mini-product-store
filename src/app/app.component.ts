import { Component, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Optional, but recommended
  imports: [RouterOutlet, CommonModule],  // ✅ Correct import for routing
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mini-product-store';

  constructor(
    private authService: AuthService,
    private router: Router

  ){}

  // Use computed() to get the signal's value reactively
  isAuthenticated = computed(() => this.authService.isAuthenticatedUser());
    
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

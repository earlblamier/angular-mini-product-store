
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { CartService } from '../cart/cart.service'; // Import CartService

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated$!: Observable<boolean>; // Observable for authentication status
  cartItemCount: number = 0; // Number of items in the cart

  constructor(
    private authService: AuthService, 
    private cartService: CartService) {} // Inject CartService

  ngOnInit(): void {
    // Initialize isAuthenticated$ here
    this.isAuthenticated$ = this.authService.isLoggedIn$;

    // Subscribe to total item count
    this.cartService.getTotalItemCount().subscribe((count) => {
      this.cartItemCount = count; // Update the cart item count
    });
  }

  onSignOut(): void {
    this.authService.logout(); // Call logout method
  }
}
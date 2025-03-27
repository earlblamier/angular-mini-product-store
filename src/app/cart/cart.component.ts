import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { CartService, Cart } from '../cart/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true, // Mark as standalone
  imports: [CommonModule], // Import CommonModule here
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartPage implements OnInit {
  carts: Cart[] = []; // Array to store carts

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.fetchCarts(); // Fetch carts on component initialization
  }

  // Fetch carts from the API
  fetchCarts(): void {
    this.cartService.getCarts().subscribe({
      next: (data) => {
        this.carts = data; // Assign the fetched carts to the array
        console.log('Carts fetched successfully:', this.carts);
      },
      error: (error) => {
        console.error('Error fetching carts:', error);
      },
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartProduct } from '../cart/cart.service';
import { ProductService, Product } from '../product/product.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartProducts: CartProduct[] = []; // Array to store cart products
  totalItems: number = 0; // Total number of items in the cart
  totalPrice: number = 0; // Total price of items in the cart

  constructor(
    public cartService: CartService, 
    private productService: ProductService) {}

  ngOnInit(): void {
    // Subscribe to cart items
    this.cartService.getCartItems().subscribe((cartItems) => {
      this.cartProducts = cartItems;
      this.updateCartSummary(); // Update total items and total price
    });
  }

  // Update the total items and total price
  updateCartSummary(): void {
    this.totalItems = this.cartProducts.reduce((total, product) => total + product.quantity, 0);
    this.totalPrice = this.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);
  }

  // Remove a product from the cart
  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  // Clear the cart
  clearCart(): void {
    this.cartService.clearCart();
  }
}
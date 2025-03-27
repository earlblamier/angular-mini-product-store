
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface CartProduct {
  productId: number;
  quantity: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<CartProduct[]>([]); // BehaviorSubject to track cart items
  private totalItemCount = new BehaviorSubject<number>(0); // BehaviorSubject to track total item count

  constructor() {}

  // Get the cart items as an observable
  getCartItems(): Observable<CartProduct[]> {
    return this.cartItems.asObservable();
  }

  // Get the total item count as an observable
  getTotalItemCount(): Observable<number> {
    return this.totalItemCount.asObservable();
  }

  // Add a product to the cart
  addToCart(product: CartProduct): void {
    const currentCart = this.cartItems.getValue();
    const existingProduct = currentCart.find((item) => item.productId === product.productId);

    if (existingProduct) {
      // If the product already exists in the cart, increase its quantity
      existingProduct.quantity += 1;
    } else {
      // Otherwise, add the product to the cart with quantity 1
      currentCart.push({ ...product, quantity: 1 });
    }

    this.cartItems.next(currentCart); // Update the cart
    this.updateCartItemCount(); // Update the total item count
  }

  // Remove a product from the cart
  removeFromCart(productId: number): void {
    const currentCart = this.cartItems.getValue();
    const updatedCart = currentCart.filter((item) => item.productId !== productId);
    this.cartItems.next(updatedCart); // Update the cart
    this.updateCartItemCount(); // Update the total item count
  }

  // Update the total item count
  updateCartItemCount(): void {
    const totalItems = this.cartItems.getValue().reduce((total, product) => total + product.quantity, 0);
    this.totalItemCount.next(totalItems); // Update the BehaviorSubject with the new count
  }

  // Update the quantity of a product in the cart
updateProductQuantity(productId: number, quantity: number): void {
  const currentCart = this.cartItems.getValue();
  const product = currentCart.find((item) => item.productId === productId);

  if (product) {
    product.quantity = quantity > 0 ? quantity : 0; // Ensure quantity is not negative
    if (product.quantity === 0) {
      // Remove the product if quantity is 0
      this.removeFromCart(productId);
    } else {
      this.cartItems.next(currentCart); // Update the cart
    }
  }
}

  // Clear the cart
  clearCart(): void {
    this.cartItems.next([]); // Reset the cart
    this.totalItemCount.next(0); // Reset the total item count
  }
}
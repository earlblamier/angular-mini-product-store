import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CartProduct {
  productId: number;
  quantity: number;
}

export interface Cart {
  id: number;
  userId: number;
  date: string;
  products: CartProduct[];
}

@Injectable({
  providedIn: 'root', // Makes this service available globally
})
export class CartService {
  private apiUrl = 'https://fakestoreapi.com/carts'; // API URL for carts

  constructor(private http: HttpClient) {}

  // Fetch all carts
  getCarts(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.apiUrl);
  }

  // Fetch a single cart by ID
  getCartById(id: number): Observable<Cart> {
    return this.http.get<Cart>(`${this.apiUrl}/${id}`);
  }
}
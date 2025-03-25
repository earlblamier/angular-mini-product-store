import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ProductService, Product } from '../product/product.service';

@Component({
  selector: 'app-home',
  standalone: true, // Mark as standalone
  imports: [CommonModule], // Import CommonModule here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePage implements OnInit {
  products: Product[] = []; // Use the Product interface for strong typing

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        console.log('Fetched products:', data); // Debugging: Log the fetched products
        this.products = data; // Assign the fetched products to the products array
      },
      error: (err) => {
        console.error('Error fetching products:', err); // Log any errors
      }
    });
  }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'add-product',
  standalone: true, // Mark as standalone
  imports: [FormsModule, CommonModule], // Add FormsModule here
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  product = {
    title: '',
    price: 0,
    description: '',
    image: ''
  };

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private router: Router
  ) {}

  // Check if the user is authenticated
  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated(); // Use the method from AuthService
  }

  // Method to handle form submission
  onSubmit(): void {
    console.log('Product added:', this.product);
    alert('Product added successfully!');
    this.resetForm();
  }

  // Method to reset the form
  resetForm(): void {
    this.product = {
      title: '',
      price: 0,
      description: '',
      image: '' // Reset the image property
    };
  }

  // Method to add a new product
  addProduct() {
    if (!this.isAuthenticated) {
      alert('You must be logged in to add a product!');
      return;
    }
  
    if (!this.product.title || this.product.price <= 0 || !this.product.description) {
      alert('Please fill in all required fields with valid data!');
      return;
    }
  
    this.productService.addProduct(this.product).subscribe(
      response => {
        alert('Product added successfully!');
        this.router.navigate(['/product']); // Navigate to product page after adding
      },
      error => {
        console.error('Error adding product:', error);
        alert('Failed to add product. Please try again.');
      }
    );
  }
}

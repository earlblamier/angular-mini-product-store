import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductPage {
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

  // Method to add a new product
  addProduct() {
    if (!this.isAuthenticated) {
      alert('You must be logged in to add a product!');
      return;
    }

    this.productService.addProduct(this.product).subscribe(
      response => {
        alert('Product added successfully!');
        this.router.navigate(['/product']);  // Navigate to product page after adding
      },
      error => {
        console.error('Error adding product:', error);
        alert('Failed to add product. Please try again.');
      }
    );
  }
}

import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ProductService, Product } from '../product/product.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-home',
  standalone: true, // Mark as standalone
  imports: [CommonModule], // Import CommonModule here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePage implements OnInit {
  products: Product[] = []; // Use the Product interface for strong typing
  showBackToTop = false; // Control visibility of the button

  constructor(
    private productService: ProductService,
    private cartService: CartService // Inject CartService
  ) {}

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

  // Add product to cart
  addToCart(product: Product): void {
    this.cartService.addToCart({
      productId: product.id,
      title: product.title,
      price: product.price,
      category: product.category,
      description: product.description,
      image: product.image,
      rating: product.rating,
      quantity: 1, // Default quantity is 1 when adding to the cart
    });
    alert(`${product.title} has been added to the cart!`);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.showBackToTop = window.scrollY > 300; // Show button when scrolled 300px down
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
  
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  template: `
    <h2>Welcome to Mini Product Store</h2>
    <div *ngFor="let product of products">
      <h3>{{ product.title }}</h3>
      <p>{{ product.description }}</p>
      <p>\${{ product.price }}</p>
    </div>
  `,
  styleUrls: ['./home.component.scss']

})
export class HomePage implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}

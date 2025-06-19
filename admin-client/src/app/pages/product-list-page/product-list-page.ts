import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../../components/product/product-list/product-list.component';

@Component({
  selector: 'app-product-list-page',
  imports: [CommonModule, ProductListComponent],
  templateUrl: './product-list-page.html',
  styleUrl: './product-list-page.css'
})
export class ProductListPage implements OnInit {
  
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (response) => {
        console.log('Products fetched successfully', response);
        this.products = response;
      }
    })
  }

}

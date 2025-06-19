import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductItemComponent } from "../product-item/product-item.component";

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  @Input() products: Product[] = [];

}

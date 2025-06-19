import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

  @Input() product!: Product;
  @Output() editProductClicked = new EventEmitter<Product>();

  onEditClick() {
    this.editProductClicked.emit(this.product);
  }
}

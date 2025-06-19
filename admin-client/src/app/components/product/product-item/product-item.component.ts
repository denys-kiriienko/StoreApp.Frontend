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
  @Output() deleteProductClicked = new EventEmitter<Product>();
  
  onEditClick() {
    this.editProductClicked.emit(this.product);
  }

  onDeleteClick(event: MouseEvent): void {
    event.stopPropagation();
    this.deleteProductClicked.emit(this.product);
  }
}

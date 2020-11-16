import { Component, Input, OnInit, Output, EventEmitter} from "@angular/core";
import { Product } from '../product.model';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[];

  @Output() onRemoveProduct = new EventEmitter();

  @Output() onUpdateQuantityProduct = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  removeProduct(productId: string): void {

    this.onRemoveProduct.emit(productId)

  }

  updateQuantity(productId: number, element) {
    const value = element.value;
    const intValue = parseInt(value);

    if (intValue < 1) {
      element.value = -intValue + "";
    } else if (value.length > 2) {
      element.value = value.slice(0,2);
    }

    this.onUpdateQuantityProduct.emit({productId, quantity: parseInt(element.value) || '' });
  }
}

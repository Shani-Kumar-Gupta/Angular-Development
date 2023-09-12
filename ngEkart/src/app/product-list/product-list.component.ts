import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  name = "Shani";
  product = {
    name: 'Iphone X',
    prize: 789,
    color: 'Black',
    discount: 8.5,
    inStock: 10,
    pImage: '/assets/images/iphone.webp'
  }

  getDiscountedPrice() {
    return this.product.prize - (this.product.prize * this.product.discount / 100);
  }
}

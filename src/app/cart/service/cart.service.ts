import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItemModel } from '../model/cart-item.model';
import { ProductModel } from 'src/app/product-list/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItemModel[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);

  getCartItems() {
    return this.cartItems;
  }

  getCartItemCount() {
    return this.cartItemCount.asObservable();
  }

  addToCart(product: ProductModel) {
    const existingItem = this.cartItems.find(item => item.product.id_producto == product.id_producto);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
    this.cartItemCount.next(this.cartItems.length);
  }
}


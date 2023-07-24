import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItemModel } from '../../cart/model/cart-item.model';
import { ProductModel } from 'src/app/product-list/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProductList: CartItemModel[] = [];
  public cartListUpdated = new EventEmitter<any>();
  private totalItemCount = new BehaviorSubject<number>(0);

  getCartList() {
    return this.cartProductList;
  }

  getCartItemsCount() {
    return this.totalItemCount.asObservable();
  }

  addToCart(product: ProductModel) {
    const existingItem = this.cartProductList.find(item => item.product.id_producto == product.id_producto);
    existingItem ?  existingItem.quantity++ :  this.cartProductList.push({ product, quantity: 1 });

    this.totalItemCount.next(this.totalItemCount.value + 1);
    this.cartListUpdated.emit();
  }

  removeFromCart(product: ProductModel) {
    const existingItemIndex = this.cartProductList.findIndex(item => item.product.id_producto == product.id_producto);

    if (existingItemIndex !== -1) {
      const existingItem = this.cartProductList[existingItemIndex];
      existingItem.quantity > 1 ? existingItem.quantity-- :  this.cartProductList.splice(existingItemIndex, 1);
    }

    this.totalItemCount.next(this.totalItemCount.value - 1);
    this.cartListUpdated.emit();
  }
}



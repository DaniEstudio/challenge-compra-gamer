import { Component, OnInit } from '@angular/core';
import { CartItemModel } from '../model/cart-item.model';
import { CartService } from '../../shared/service/cart.service';
import { ProductModel } from 'src/app/product-list/model/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cartItems: CartItemModel[] = [];
  groupedCartItems: { product: ProductModel; quantity: number }[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.groupCartItems();
  }

  private groupCartItems(): void {
    const groupedItemsMap = this.cartItems.reduce((map, cartItem) => {
      const productId = cartItem.product.id_producto;
      const quantity = cartItem.quantity;
      map.set(productId, (map.get(productId) || 0) + quantity);
      return map;
    }, new Map<number, number>());

    this.groupedCartItems = Array.from(groupedItemsMap.entries()).map(([productId, quantity]) => {
      const product = this.cartItems.find((item) => item.product.id_producto === productId)?.product;
      return { product: product!, quantity };
    });
  }

}


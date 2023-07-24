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
  public cartProductList: CartItemModel[] = [];
  public isEmpty: boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartProductList = this.cartService.getCartList();
    this.cartService.cartListUpdated.subscribe(() => {
      this.cartProductList = this.cartService.getCartList();
      this.validateList();
    });
    this.validateList();
  }

  private validateList(): void {
    this.isEmpty = this.cartProductList.length === 0;
  }
}


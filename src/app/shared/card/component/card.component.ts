import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/service/cart.service';
import { ProductModel } from 'src/app/product-list/model/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() product: ProductModel;
  @Input() quantity: number;
  @Input() onCart: boolean = false;
  public imgUrl: string = '';

  constructor(private cartService: CartService) { }

  ngOnInit(): void {  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }

}

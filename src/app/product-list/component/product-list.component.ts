import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../service/product-list.service';
import { ProductModel } from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public productList: ProductModel[];

  constructor(
    private productListService: ProductListService,
  ) { }

  ngOnInit(): void {
    this.fetchProductData();
  }

  fetchProductData(): void {
    this.productListService.getProductData().subscribe((responseList: ProductModel[]) => {
      this.productList = responseList;
      this.validateData();
    });
  }

  private validateData(): void {
    if (!this.productList || this.productList.length == 0) console.warn('Product data is null or empty.');
  }
}

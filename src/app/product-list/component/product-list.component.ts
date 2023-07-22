import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../service/product-list.service';
import { ProductModel } from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productListService: ProductListService) { }

  ngOnInit(): void {
    this.fetchProductData();
  }

  fetchProductData(): void{
    this.productListService.getProductData().subscribe((list: ProductModel[]) => {
      console.log(list);
    });
  }
}

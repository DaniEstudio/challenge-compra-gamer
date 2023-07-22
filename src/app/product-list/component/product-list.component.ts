import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../service/product-list.service';
import { ProductModel } from '../model/product.model';
import { CategoryFilterService } from 'src/app/shared/service/category-filter.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public filteredProductList: ProductModel[];
  private productList: ProductModel[];
  private groupId: number;

  constructor(
    private productListService: ProductListService,
    private categoryFilterService: CategoryFilterService
  ) { }

  ngOnInit(): void {
    this.fetchProductData();
    this.subscribeToGroupId();
  }

  fetchProductData(): void {
    this.productListService.getProductData().subscribe((responseList: ProductModel[]) => {
      this.productList = responseList;
      this.filteredProductList = responseList;
      this.validateData();
      this.filterProducts();
    });
  }

  private validateData(): void {
    if (!this.productList || this.productList.length === 0) {
      console.warn('Product data is null or empty.');
    }
  }

  private subscribeToGroupId(): void {
    this.categoryFilterService.getGroupId().subscribe(groupId => {
      this.groupId = groupId;
      this.filterProducts();
    });
  }

  private filterProducts(): void {
    this.filteredProductList = this.groupId
      ? this.productList.filter(product => product.id_subcategoria === this.groupId)
      : this.productList;
  }

}

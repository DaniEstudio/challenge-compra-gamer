import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../service/product-list.service';
import { ProductModel } from '../model/product.model';
import { CategoryFilterService } from 'src/app/shared/service/category-filter.service';
import { CategoryService } from 'src/app/shared/service/category.service';
import { CategoryModel } from 'src/app/navbar/model/category.model';
import { CartService } from 'src/app/shared/service/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public productList: ProductModel[];
  public filteredProductList: ProductModel[];
  public cartItemCount: { [key: number]: number } = {};
  private searchInput: string;
  private groupId: number;
  private cartSubscription: Subscription;

  constructor(
    private productListService: ProductListService,
    private categoryService: CategoryService,
    private categoryFilterService: CategoryFilterService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.fetchProductData();
    this.subscribeToGroupId();
    this.cartSubscription = this.cartService.getCartItemsCount().subscribe(() => {
      this.updateProductQuantities();
    });
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

  fetchProductData(): void {
    this.productListService.getProductData().subscribe((responseList: ProductModel[]) => {
      this.productList = responseList;
      this.filteredProductList = responseList;
      this.fetchCategory(responseList);
      this.validateData();
      this.filterProducts();
      this.updateProductQuantities();
    });
  }

  private fetchCategory(productList: ProductModel[]): void {
    this.categoryService.getCategoryData().subscribe((responseList: CategoryModel[]) => {
      const categoryMap: { [key: number]: string } = {};
      responseList.forEach((category) => {
        categoryMap[category.id] = category.nombre;
      });

      productList.forEach((product) => {
        product.categoryName = categoryMap[product.id_subcategoria] || 'Unknown Category';
      });
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
    let filteredList: ProductModel[] = this.productList;

    if (this.searchInput) {
      filteredList = filteredList.filter(product =>
        product.nombre.toLowerCase().includes(this.searchInput.toLowerCase())
      );
    }

    if (this.groupId) {
      filteredList = filteredList.filter(product => product.id_subcategoria === this.groupId);
    }

    this.filteredProductList = filteredList;
  }

  private updateProductQuantities(): void {
    const cartItems = this.cartService.getCartList();
    this.cartItemCount = {};

    cartItems.forEach((cartItem) => {
      const productId = cartItem.product.id_producto;
      this.cartItemCount[productId] = cartItem.quantity;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../service/product-list.service';
import { ProductModel } from '../model/product.model';
import { CategoryFilterService } from 'src/app/shared/service/category-filter.service';
import { ProductSearchService } from 'src/app/shared/service/product-search.service';
import { CategoryService } from 'src/app/shared/service/category.service';
import { CategoryModel } from 'src/app/navbar/model/category.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public productList: ProductModel[];
  public filteredProductList: ProductModel[];
  private searchInput: string;
  private groupId: number;

  constructor(
    private productListService: ProductListService,
    private categoryService: CategoryService,
    private productSearchService: ProductSearchService,
    private categoryFilterService: CategoryFilterService
  ) { }

  ngOnInit(): void {
    this.fetchProductData();
    this.subscribeToGroupId();
    this.subscribeToSearchTerm();
  }

  fetchProductData(): void {
    this.productListService.getProductData().subscribe((responseList: ProductModel[]) => {
      this.productList = responseList;
      this.filteredProductList = responseList;
      console.table(responseList);
      this.fetchCategory(responseList);
      this.validateData();
      this.filterProducts();
    });
  }

  private fetchCategory(productList: ProductModel[]): void {
    this.categoryService.getCategoryData().subscribe((responseList: CategoryModel[]) => {
      // Create a map of categoryId to categoryName for easy lookup
      const categoryMap: { [key: number]: string } = {};
      responseList.forEach((category) => {
        categoryMap[category.id] = category.nombre;
      });

      // Assign the categoryName to each product in the productList
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

  private subscribeToSearchTerm(): void {
    this.productSearchService.getSearchTerm().subscribe(searchTerm => {
      this.searchInput = searchTerm;
      this.filterProducts();
    });
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


}

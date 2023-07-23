import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../service/navbar.service';
import { CategoryModel } from '../model/category.model';
import { CategoryFilterService } from 'src/app/shared/service/category-filter.service';
import { ProductSearchService } from '../../shared/service/product-search.service';
import { NavigationStart, Router } from '@angular/router';
import { CartService } from 'src/app/cart/service/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public cartItemCount = 0;
  public isExpanded: boolean = false;
  public categoryList: CategoryModel[];

  constructor(
    private navBarService: NavbarService,
    private categoryFilterService: CategoryFilterService,
    private productSearchService: ProductSearchService,
    private router: Router,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.fetchCategoriestData();

    this.cartService.getCartItemCount().subscribe(count => {
      this.cartItemCount = count;
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isExpanded = false;
      }
    });
  }


  private fetchCategoriestData(): void {
    this.navBarService.getProductData().subscribe((responseList: CategoryModel[]) => {
      this.categoryList = responseList;
    });
  }

  resetFilter(): void {
    this.categoryFilterService.setGroupId(null);
    this.isExpanded = false;
    this.resetSearchBar();
  }

  onCategoryClick(groupId: number): void {
    this.categoryFilterService.setGroupId(groupId);
    this.resetSearchBar();
  }

  toggleExpandable(): void {
    this.isExpanded = !this.isExpanded;
  }

  resetSearchBar(): void{
    this.productSearchService.setSearchTerm('');
  }
}

import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../service/navbar.service';
import { CategoryModel } from '../model/category.model';
import { CategoryFilterService } from 'src/app/shared/service/category-filter.service';
import { ProductSearchService } from '../../shared/service/product-search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  public isExpanded: boolean = false;
  public categoryList: CategoryModel[];

  constructor(
    private navBarService: NavbarService,
    private categoryFilterService: CategoryFilterService,
    private productSearchService: ProductSearchService
  ) { }

  ngOnInit(): void {
    this.fetchCategoriestData();
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

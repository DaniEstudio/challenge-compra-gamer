import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../service/navbar.service';
import { CategoryModel } from '../model/category.model';
import { CategoryFilterService } from 'src/app/shared/service/category-filter.service';
import { MatExpansionPanel } from '@angular/material/expansion';

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
    private categoryFilterService: CategoryFilterService
  ) { }

  ngOnInit(): void {
    this.fetchCategoriestData();
  }

  private fetchCategoriestData(): void {
    this.navBarService.getProductData().subscribe((responseList: CategoryModel[]) => {
      this.categoryList = responseList;
      console.table(responseList);
    });
  }

  resetFilter(): void {
    this.categoryFilterService.setGroupId(null);
    this.isExpanded = false;
  }

  onCategoryClick(groupId: number): void {
    this.categoryFilterService.setGroupId(groupId);
  }

  toggleExpandable(): void {
    this.isExpanded = !this.isExpanded;
  }
}

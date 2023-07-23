import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../model/category.model';
import { CategoryFilterService } from 'src/app/shared/service/category-filter.service';
import { NavigationStart, Router } from '@angular/router';
import { CartService } from 'src/app/shared/service/cart.service';
import { CategoryService } from 'src/app/shared/service/category.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('iconAnimation', [
      state('collapsed', style({ opacity: 1, transform: 'rotate(0)' })),
      state('expanded', style({ opacity: 1, transform: 'rotate(-180deg)' })),
      transition('collapsed <=> expanded', animate('0.3s ease-in-out')),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  public cartItemCount = 0;
  public isExpanded: boolean = false;
  public categoryList: CategoryModel[];

  constructor(
    private categoryService: CategoryService,
    private categoryFilterService: CategoryFilterService,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.fetchCategoriestData();

    this.cartService.getTotalCartItems().subscribe(count => {
      this.cartItemCount = count;
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isExpanded = false;
      }
    });
  }

  private fetchCategoriestData(): void {
    this.categoryService.getCategoryData().subscribe((responseList: CategoryModel[]) => {
      this.categoryList = responseList;
    });
  }

  resetFilter(): void {
    this.categoryFilterService.setGroupId(null);
    this.categoryService.setCategoryImgURL(null);
    this.isExpanded = false;
  }

  onCategoryClick(groupId: number, categoryImgName: string): void {
    this.categoryFilterService.setGroupId(groupId);
    this.categoryService.setCategoryImgURL(categoryImgName);
  }

  toggleExpandable(): void {
    this.isExpanded = !this.isExpanded;
  }
}

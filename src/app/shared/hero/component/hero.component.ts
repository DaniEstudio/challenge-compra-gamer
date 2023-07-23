import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, OnDestroy {
  public imgUrl: string | null = null; // Set imgUrl to null by default
  private imgUrlSubscription: Subscription;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.imgUrlSubscription = this.categoryService
      .getCategoryImgURL()
      .subscribe((imgUrl) => {
        this.imgUrl = imgUrl;
      });
  }

  ngOnDestroy(): void {
    if (this.imgUrlSubscription) {
      this.imgUrlSubscription.unsubscribe();
    }
  }
}


import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductSearchService } from '../../service/product-search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  searchInput: FormControl = new FormControl();

  constructor(private productSearchService: ProductSearchService) {}

  onSearch(): void {
    const searchTerm: string = this.searchInput.value.trim();
    this.productSearchService.setSearchTerm(searchTerm);
  }
}

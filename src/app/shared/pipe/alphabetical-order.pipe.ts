import { Pipe, PipeTransform } from '@angular/core';
import { CategoryModel } from 'src/app/navbar/model/category.model';

@Pipe({
  name: 'order'
})
export class AlphabeticalOrderPipe implements PipeTransform {
  transform(array: CategoryModel[]): CategoryModel[] {
    if (!Array.isArray(array)) {
      return array;
    }
    return array.slice().sort((a, b) => a.nombre.localeCompare(b.nombre));
  }
}



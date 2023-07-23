import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat'
})
export class PriceFormatPipe implements PipeTransform {
  transform(value: number, currencySymbol: string = '$'): string {
    const formattedValue = value.toLocaleString('es-AR', { minimumFractionDigits: 0 });
    return `${currencySymbol}${formattedValue}`;
  }
}


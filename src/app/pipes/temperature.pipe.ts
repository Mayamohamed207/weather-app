// temperature.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true
})
export class TemperaturePipe implements PipeTransform {
  transform(value: number, symbol: string = '°C'): string {
    if (isNaN(value)) return '';
    return `${Math.round(value)}${symbol}`;
  }
}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado',
  standalone: true
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

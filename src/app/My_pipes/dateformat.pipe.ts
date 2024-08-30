import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateformat'
})
export class DateformatPipe implements PipeTransform {

  transform(value: any, format: string = 'mediumDate'){
    
    if (!value) return null;

    const date = new Date(value);

    // Use Angular's DatePipe for formatting
    const options: Intl.DateTimeFormatOptions = {};

    switch (format) {
      case 'shortDate':
        options.year = 'numeric';
        options.month = 'short';
        options.day = 'numeric';
        break;
      case 'mediumDate':
        options.year = 'numeric';
        options.month = 'short';
        options.day = 'numeric';
        options.weekday = 'short';
        break;
      case 'longDate':
        options.year = 'numeric';
        options.month = 'long';
        options.day = 'numeric';
        options.weekday = 'long';
        break;
      default:
        options.year = 'numeric';
        options.month = 'short';
        options.day = 'numeric';
    }

    
  }

}

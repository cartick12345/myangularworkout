import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var currentYear = new Date().getFullYear();
    var userYear = new Date(value).getFullYear();
    var userAge = currentYear - userYear;
    return userAge;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //console.log(value);
    if(value == undefined){
      return "";
    }
    return value.split("").reverse().join("");
  }

}

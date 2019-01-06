import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //console.log(value);
    if(value == undefined || value.length ==0){
      return "empty";
    }
    else{
    var i = value;
      var j = i % 10,
          k = i % 100;
          console.log (i,j,k);
      if (j == 1 && k != 11) {
          return i + "st";
      }
      if (j == 2 && k != 12) {
          return i + "nd";
      }
      if (j == 3 && k != 13) {
          return i + "rd";
      }
      return i + "th";
  }
    
  }
}

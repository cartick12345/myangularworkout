import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, search: any): any {
    if(search == undefined || search == "")
    {
        return value;
    }
    var tempArr =[];
    for (var i=0;i<value.length;i++){
      //console.log(value[i]);
      //
      console.log(search);
      if(value[i].productName.startsWith(search)){
        
        tempArr.push(value[i]);
      }
    }
    return tempArr;
  }

}

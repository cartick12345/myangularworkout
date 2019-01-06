import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: any, args?: any, limit ?: number): any {
    //console.log(args);
    //console.log(limit);
    if(args == undefined && limit<=10){
      return value.substr(0,10) + "...";
    }
    else if (limit>10) {
      return value.substr(0,limit) + "...";
    }
  }

}

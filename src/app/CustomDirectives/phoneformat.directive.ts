import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPhoneformat]'
})
export class PhoneformatDirective {

  constructor(public elemref : ElementRef) { }

  @HostListener ('blur') onMyBlur(){

    let value : string = this.elemref.nativeElement.value;
    var fp = value.slice(0,5);
    console.log(fp);
    var lp = value.slice(5,value.length);
    console.log(lp);
    var arr = [];
    arr.push("+91",fp,"-",lp);
   console.log(arr.join(''));
   var res = arr.join('');
   
   this.elemref.nativeElement.value = res;
}

}

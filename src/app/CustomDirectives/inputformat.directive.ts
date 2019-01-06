import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { format } from 'util';

@Directive({
  selector: '[appInputformat]'
})
export class InputformatDirective {

  constructor(public elref : ElementRef) { }

  @Input ('appInputformat') format;
  @HostListener ('blur') onMyBlur(){

    
    var value :string = this.elref.nativeElement.value;
    console.log(value);
    if(this.format == "lower")
    this.elref.nativeElement.value = value.toLowerCase();
    else{
      this.elref.nativeElement.value = value.toUpperCase();
    }
  }

}

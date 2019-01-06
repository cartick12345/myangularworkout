import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(public elementref:ElementRef) { }

  @HostListener ('mouseover') onMyMouseOver(){
    this.elementref.nativeElement.style.backgroundColor = "red";

  }

  @HostListener ('mouseleave') onMyMouseLeave(){
    this.elementref.nativeElement.style.backgroundColor = "transparent";
  }
}

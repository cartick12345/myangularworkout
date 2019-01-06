import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appGofor]'
})
export class GoforDirective {

  constructor(public tempRef:TemplateRef<any> , public vcRef : ViewContainerRef) { }

  @Input() set appGofor(val:number){
    this.vcRef.clear();
    for(var i=0; i<val; i++){

    this.vcRef.createEmbeddedView(this.tempRef);
    }

  }


}

import { Directive, ViewContainerRef, Input , TemplateRef} from '@angular/core';

@Directive({
  selector: '[appGoif]'
})
export class GoifDirective {

  constructor(public teref:TemplateRef<any> , public vcRef : ViewContainerRef ) { }

  @Input() set appGoif (cond:boolean){
    if(cond){
      this.vcRef.createEmbeddedView(this.teref);
    }
    else{
      this.vcRef.clear();
    }
  }

}

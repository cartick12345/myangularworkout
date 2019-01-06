import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector :'app-product',
    templateUrl :'./product.component.html',
    styleUrls :['./product.component.css']
})

export class ProductComponent {

    @Input() public parentData;
    @Output() onMyButtonClick = new EventEmitter();

    sendDataToParent(){
        this.onMyButtonClick.emit("message from child to parent");
    }
}

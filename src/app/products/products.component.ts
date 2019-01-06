import { Component, OnInit } from '@angular/core';
import { ProductsServices } from '../products.services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    // isAllowed = true;
   // code = "";
   // name = "";
   parentMess = "Message from Parent To Child";
   childMess;
   constructor() { 
   }

   getDataFromChild(val:string){
    //console.log(val);
    this.childMess = val;
   }
  /*constructor(public obj1:ProductsServices) { 
    //this.newObj.productCode = this.code;
    //this.newObj.productName = this.name;
    
    
  }
  createProduct(){
   this.obj1.addProduct(this.code,this.name);
    this.code="";
    this.name="";
    
 }*/
 

  ngOnInit() {
  }
 /* enableTextBox(){
    this.isAllowed = false;
  }
  disableTextBox(){
    this.isAllowed = true;
  }*/
}

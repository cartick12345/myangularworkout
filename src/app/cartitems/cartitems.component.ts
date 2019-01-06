import { Component, OnInit, Input } from '@angular/core';
import { ProductsServices } from '../products.services';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.css']
})
export class CartitemsComponent implements OnInit {
    //count : number = 0;
    search = "";
    code = "";
    name = "";
    public ecode:any;
    public ename = "";
    public updateValue;
     productArray : any [] = [];
     @Input() set parentData(val){
       //console.log(val);
        this.search=val;
        
        //console.log(this.search);
        //this.searchProduct(this.search);
     }
     
     
  constructor(public obj2:ProductsServices) {
    
    this.productArray = this.obj2.viewProduct();  
    //console.log(this.productArray);
    //this.productArray = obj2.viewProduct1();
   }
   editProduct(val){
    var recObj = this.obj2.editProduct(val);
    //console.log(recObj);
    this.ecode = recObj.productCode;
    this.ename = recObj.productName;
    this.updateValue = recObj.ival;
    //console.log(this.updateValue);
   }
   updateProduct(){
         this.productArray = this.obj2.updateProduct(this.ecode,this.ename,this.updateValue);
         this.ecode ="" ;
          this.ename = "";
         //console.log(this.updateValue);
   }
   searchProduct(val){
    this.productArray = this.obj2.productSearch(val);
    //console.log(this.productArray);
    }
   createProduct(){
    this.productArray = this.obj2.addProduct(this.code,this.name);
    //console.log(this.productArray);
     this.code="";
     this.name="";
  }
    deleteProduct(i){
      //alert(i);
      this.productArray = this.obj2.deleteProduct(i);
    }
  /*addCartItems(){
   this.count ++;
  }*/
  ngOnInit() {
    
  }

}

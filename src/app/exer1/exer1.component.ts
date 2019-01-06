import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exer1',
  templateUrl: './exer1.component.html',
  styleUrls: ['./exer1.component.css']
})
export class Exer1Component implements OnInit {
  productArray = [];
  countArray = [];
  count = 1;
  viewMode = "Personal";
  page = "Home";
  userName = "";
  isDisabled = false;
  successClass = "text-success";
  hasError = true;
  isWarning = false;
  isDisplay = true;
  public classObj = {
    "text-success" : !this.isDisabled,
    "text-warning" : this.isWarning,
    "text-danger" : !this.hasError
  }
  public highlight = "blue";
  public stylesObj = {
    "color" : "blue",
    "backgroundColor" : "yellow",
    "fontSize" : "80px",
    
    "fontStyle" : "italic"
  }
  veg = ["onion","beetroot","tomoto","cucumber"];
  public color = "";
    createProduct(event){
      console.log(event);
      console.log(event.type);
      console.log(event.target.value);
      console.log(event.keyCode);
    }
  hideContent(){
    if(this.isDisplay==true){
      this.isDisplay = false;
    }
    else{
      this.isDisplay = true;
    }
     
    console.log(this.countArray);
    this.countArray.push(this.count);
    this.count++;
    
  }
  addDetails(a,b){
    var z = {productCode : a, productName : b };
    this.productArray.push(z);
    console.log(this.productArray);
    var empty = "";

  }
  
  constructor() { 
   
  }
  reset(){
  
    this.userName="";
    
  }

  ngOnInit() {
    
  }
  

}

import { Component, OnInit } from '@angular/core';
import { ProductsServices } from '../products.services';

@Component({
  selector: 'app-parenttocart',
  templateUrl: './parenttocart.component.html',
  styleUrls: ['./parenttocart.component.css']
})
export class ParenttocartComponent implements OnInit {
  //public productArray:any[] = [];
  public search = "";
  constructor(public obj1:ProductsServices) { }
  
  
  ngOnInit() {
  }

}

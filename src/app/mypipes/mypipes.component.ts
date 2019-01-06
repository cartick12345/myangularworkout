import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mypipes',
  templateUrl: './mypipes.component.html',
  styleUrls: ['./mypipes.component.css'],
  encapsulation:ViewEncapsulation.Emulated//default
})
export class MypipesComponent implements OnInit {

  public reverseString = "";
  public ordNum = "";
  public limit = "";
  public dob = "";

  public name = "KARTHICK";
  public wName = "shek Karthick";
  public title = "i am karthick from erode";
  public obj = {name : "karthick", place : "Erode"};
  public num = 123.4567;//Default 3 decimal digits
  public num1 = 4.5;
  public price = 400;
  public dt = new Date();

  constructor() { }

  ngOnInit() {
  }

}

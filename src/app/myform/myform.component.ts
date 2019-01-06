import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

  public name = "karthick";
  public email = "cartickme@gmail.com";
  public password = 12345;
  public country = 1;
  public address = "erode";
  public gender = "male";
  public accept = true;

  public myData = {name:"",email:"",password:"",country:"",address:"",gender:"",accept:""};
  constructor() { }
  submitForm(form:NgForm){
    console.log(form.value);
    this.myData.name=form.value.uname;
    this.myData.email=form.value.umail;
    this.myData.password=form.value.upass;
    this.myData.country=form.value.ucountry;
    this.myData.address=form.value.uaddress;
    this.myData.gender=form.value.gender;
    this.myData.accept=form.value.accept;
    

  }

  ngOnInit() {
  }

}

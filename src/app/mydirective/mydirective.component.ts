import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mydirective',
  templateUrl: './mydirective.component.html',
  styleUrls: ['./mydirective.component.css']
})
export class MydirectiveComponent implements OnInit {
  condition:boolean = true;
  count : number = 0;

  constructor() { }

  ngOnInit() {
  }

}

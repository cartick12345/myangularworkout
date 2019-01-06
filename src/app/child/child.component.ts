import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

 @Input() public parentData;
@Output() public childEvent = new EventEmitter();

  constructor() {
    
   }
   fireEvent(){
     this.childEvent.emit("Hey Shek");
  }

  ngOnInit() {
  }

}

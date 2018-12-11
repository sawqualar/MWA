import { Component, OnInit, Input ,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)=decrease()>-</button>{{counterValue}}<button (click)=increase()>+</button> 
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  // value : number; 
  @Input() counter : number;
  counterValue : number;
  constructor(){
    // this.value = 1;
  }

  @Output() counterChange = new EventEmitter();

  decrease(){
   
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
    return false;
  }
  increase(){
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
    return false;
  }


  ngOnInit() {
    this.counterValue = this.counter;
    this.counterChange.emit(this.counterValue);
  }

}


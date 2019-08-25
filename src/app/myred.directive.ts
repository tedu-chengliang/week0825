import { Directive,ElementRef } from '@angular/core';
//装饰器
@Directive({
  selector: '[appMyred]'
})
export class MyredDirective {

  constructor(el:ElementRef) { 
    //el.nativeElement: 当前的dom元素
    // console.log(el);
    el.nativeElement.style.color='red';
  }

}

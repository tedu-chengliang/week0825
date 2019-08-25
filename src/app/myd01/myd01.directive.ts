import {Directive,ElementRef} from '@angular/core';

@Directive({
  selector:'[appMybg]'
})

export class MybgDirective{
  constructor(el:ElementRef){
    el.nativeElement.style.background='lightblue';
    console.log('指令调用成功');
  }
}
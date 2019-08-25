//从angular的核心库中引入组件类
import {Component} from '@angular/core';
//装饰器
@Component({
  selector:'app-myc01', //标签名，如何调用组件
  template:`
    <h2>这是我的第一个组件</h2>  
  `
  //组件模板   <app-myc01></app-myc01>
})
//导出组件类，可以放要导出的数据和函数
export class MyComponent01{

}


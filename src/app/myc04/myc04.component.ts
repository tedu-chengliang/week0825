import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc04',
  templateUrl: './myc04.component.html',
  styleUrls: ['./myc04.component.css']
})
export class Myc04Component implements OnInit {
  list:Array<object>=[
    {name:'tome',age:18,score:87},
    {name:'jerry',age:22,score:56},
    {name:'king',age:21,score:72},
    {name:'lucy',age:19,score:93},
    {name:'david',age:17,score:88}
  ];
  del(n){
    //alert(n);
    //删除传递的下标对应的元素
    this.list.splice(n,1);
  }
  //指定数据的类型
  bool:boolean=false;
  num:number=4;
  myStyle={
    'color':'red',
    'font-size':'22px'
  }
  myClass={
    'blue':true,
    'hide':true
  }
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc03',
  templateUrl: './myc03.component.html',
  styleUrls: ['./myc03.component.css']
})
export class Myc03Component implements OnInit {
  userName='tom';
  userAge=18;
  linkUrl='http://www.codeboy.com';
  imgUrl='../../assets/2.jpg';
  title='这是一张图片';
  list=[
    {ename:'tom',age:18,sex:1},
    {ename:'king',age:15,sex:0},
    {ename:'lucy',age:21,sex:1},
    {ename:'david',age:17,sex:0}
  ];
  handleClick(){
    alert(1);
  }
  constructor() { }

  ngOnInit() {
  }

}

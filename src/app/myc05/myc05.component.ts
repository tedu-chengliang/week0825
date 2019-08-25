import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc05',
  templateUrl: './myc05.component.html',
  styleUrls: ['./myc05.component.css']
})
export class Myc05Component implements OnInit {
  msg:string='welcome to china';
  num:number=1;
  total:number=80;
  handleChange(){
    this.total=this.num*80;
  }
  constructor() { }

  ngOnInit() {
  }

}

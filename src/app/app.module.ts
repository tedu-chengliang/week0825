import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//引入表单模块
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//引入刚才组件类
import { MyComponent01 } from './myc01/myc01.component';
import { MyComponent02 } from './myc02/myc02.component';
import { Myc03Component } from './myc03/myc03.component';
import { Myc04Component } from './myc04/myc04.component';
import { Myc05Component } from './myc05/myc05.component';
import { MyredDirective } from './myred.directive';
import {MybgDirective} from './myd01/myd01.directive';
import { MydirectComponent } from './mydirect/mydirect.component';
import { Myc06Component } from './myc06/myc06.component';
import { SexPipe } from './sex.pipe';

@NgModule({
  declarations: [ //在模块中声明
    AppComponent,
    MyComponent01,
    MyComponent02,
    Myc03Component,
    Myc04Component,
    Myc05Component,
    MyredDirective,
    MybgDirective,
    MydirectComponent,
    Myc06Component,
    SexPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

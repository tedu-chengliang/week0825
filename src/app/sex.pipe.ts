import { Pipe, PipeTransform } from '@angular/core';
//装饰器
@Pipe({
  name: 'sex'
})
//导出类，继承接口（必须还有指定的方法）
export class SexPipe implements PipeTransform {
  /*
  transform(value: any, ...args: any[]): any {
    return null;
  }
  */
 transform(value,args){
  if(args=='en'){
    if(value==0){
      return 'female';
    }else if(value==1){
      return 'male';
    }
  }else{
    if(value==0){
      return '女';
    }else if(value==1){
      return '男';
    }
  }
  
 }

}

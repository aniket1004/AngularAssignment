import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findage'
})
export class FindagePipe implements PipeTransform {
  age : any;
  transform(value: any, ...args: unknown[]): any {
    let date: Date = new Date(value);
    var timeDiff = Math.abs(Date.now() - date.getTime());
    this.age = Math.floor((timeDiff / (1000*3600*24))/365);
    return this.age;
  }

}

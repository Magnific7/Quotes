import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value-todayWithNoTime) 
    const secondsInDay = 86400; 
    var dateSeconds = Math.round(dateDifference*0.001);
    var dateDifferenceSeconds = Math.round(dateSeconds/secondsInDay);


  
      return dateDifferenceSeconds;
  
  }
}

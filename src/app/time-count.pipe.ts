import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getDate())
    var dateDifference = Math.abs(todayWithNoTime) 
    const secondsInDay = 86400; 
    var dateDifferenceSeconds = Math.round(dateDifference*0.001);


  
      return dateDifferenceSeconds;
  
  }
}

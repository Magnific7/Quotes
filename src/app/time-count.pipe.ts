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
    var dateDifferenceSeconds = dateDifference*0.001;


    if ( dateDifferenceSeconds >= 1){
      return dateDifferenceSeconds;
    }else{
      return 0;
    }
  }
}

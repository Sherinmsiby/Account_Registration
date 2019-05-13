import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormatPipe'
})
export class DateFormatPipePipe implements PipeTransform {

  transform(value: string) {
    var datePipe = new DatePipe("en-US");
    console.log("value",value)
     //value = datePipe.transform(value, 'dd/MM/yyyy');
     value =datePipe.transform(value, 'yyyy-MM-dd');
     return value;
 }

}

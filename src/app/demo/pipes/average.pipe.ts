import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'average'
})
export class AveragePipe implements PipeTransform {

  transform(value: number[]): number {
    let reslt : number = 0;
    for(let i = 0; i < value.length; i++){
      reslt += value[i];
    }
    return reslt/value.length;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chronoView'
})
export class ChronoViewPipe implements PipeTransform {

  transform(value: number): string {
    let minutes = Math.floor(value / 60);
    let seconde = value % 60;
    return `${minutes} minutes : ${seconde} secondes` ;
  }

}

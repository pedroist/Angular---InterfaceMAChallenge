import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'housesFilter'
})
export class HousesFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

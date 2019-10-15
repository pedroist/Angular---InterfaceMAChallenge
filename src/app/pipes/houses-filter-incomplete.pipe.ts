import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'housesFilterIncomplete'
})
export class HousesFilterIncompletePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

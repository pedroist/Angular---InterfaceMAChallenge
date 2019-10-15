import { House } from './../models/House';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'housesFilterValue',
  pure: false
})
export class HousesFilterValuePipe implements PipeTransform {

  transform(houses: House[], value: number, active: boolean): House[] {
    if (!active) {
      return houses;
    }

    return houses.filter(house =>
      house.params
      && house.params.value
      && house.params.value <= value
    );
  }

}

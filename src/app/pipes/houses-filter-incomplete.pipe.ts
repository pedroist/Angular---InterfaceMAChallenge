import { House } from './../models/House';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'housesFilterIncomplete',
  pure: false
})
export class HousesFilterIncompletePipe implements PipeTransform {

  transform(houses: House[]): House[] {
    return houses.filter(house =>
      !house.params
      || (
        house.params && (
          !house.params.rooms || !house.params.value
        )));
  }

}

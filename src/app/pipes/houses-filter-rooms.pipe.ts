import { House } from './../models/House';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'housesFilterRooms',
  pure: false
})
export class HousesFilterRoomsPipe implements PipeTransform {

  transform(houses: House[], rooms: number): House[] {
    return houses.filter(house => house.params && house.params.rooms && house.params.rooms > rooms);
  }

}

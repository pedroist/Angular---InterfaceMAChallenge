import { House } from './../models/House';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'housesFilterValueRooms',
  pure: false
})
export class HousesFilterValueRoomsPipe implements PipeTransform {

  transform(houses: House[], rooms: number, value: number): House[] {
    return houses.filter(house =>
      house.params
      && house.params.rooms
      && house.params.value
      && house.params.rooms >= rooms
      && house.params.value <= value
    );
  }

}

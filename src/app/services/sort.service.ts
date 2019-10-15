import { House } from './../models/House';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  sortByDistance(list: House[]): House[] {
    let filteredList = list.filter(house => house.distance);

    return filteredList.sort((house1, house2) => {
      if (house1.distance > house2.distance)
        return 1;

      if (house1.distance < house2.distance)
        return -1;

      return 0;
    });
  }

  sortByRooms(list: House[]): House[] {
    let filteredList = list.filter(house => house.params && house.params.rooms);

    return filteredList.sort((house1, house2) => {
      if (house1.params && house1.params.rooms
        && house2.params && house2.params.rooms) {
        if (house1.params.rooms > house2.params.rooms)
          return 1;

        if (house1.params.rooms < house2.params.rooms)
          return -1;

        return 0;
      }
      return -1;
    });
  }

  sortByStreetName(list: House[]): House[] {
    let filteredList = list.filter(house => house.street);

    return filteredList.sort((house1, house2) => {
      if (house1.street > house2.street)
        return 1;

      if (house1.street < house2.street)
        return -1;

      return 0;
    });
  }
}

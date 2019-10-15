import { House } from './../models/House';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  sortByDistance(list: House[]): House[] {
    let sortedList = list.sort((house1, house2) => {
      if (house1.distance > house2.distance)
        return 1;

      if (house1.distance < house2.distance)
        return -1;

      return 0;
    });
    return sortedList;
  }

  sortByRooms(list: House[]): House[] {
    let sortedList = list.sort((house1, house2) => {
      if (house1.distance > house2.distance)
        return 1;

      if (house1.distance < house2.distance)
        return -1;

      return 0;
    });
    return sortedList;
  }
}

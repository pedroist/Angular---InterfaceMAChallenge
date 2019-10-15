import { BehaviorSubject } from 'rxjs';
import { Filter } from './../models/Filter';
import { Injectable } from '@angular/core';

const defaultFiltersList: Filter[] = [
  { filter: 'rooms', text: 'rooms >= 10', active: false },
  { filter: 'value', text: 'value <= 5 000 000 €', active: true },
  { filter: 'incomplete', text: 'Only incomplete info', active: true }
];

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filtersSource = new BehaviorSubject<Filter[]>([]);
  filtersReference = this.filtersSource.asObservable();

  private currentFiltersList: Filter[] = [];

  constructor() {
    this.filtersSource.next(defaultFiltersList);

    this.filtersReference.subscribe(filtersList => this.currentFiltersList = filtersList);
  }

  toogleFilter(filterID: string) {

    let filterToUpdate = this.currentFiltersList.find(filter => filter.filter === filterID);

    if (filterToUpdate) {
      //Update List with filter toggled
      const index = this.currentFiltersList.indexOf(filterToUpdate);

      this.currentFiltersList[index] = {
        ...filterToUpdate,
        active: !filterToUpdate.active
      }
      //Insert the new list as a new entry of the Subject to remain immutable
      this.filtersSource.next(this.currentFiltersList);
    }
  }
}

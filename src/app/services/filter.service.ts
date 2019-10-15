import { BehaviorSubject } from 'rxjs';
import { Filter } from './../models/Filter';
import { Injectable } from '@angular/core';

const defaultFiltersList: Filter[] = [
  { filter: 'rooms', active: false },
  { filter: 'value', active: true },
  { filter: 'incomplete', active: true }
];

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filtersSource = new BehaviorSubject<Filter[]>(defaultFiltersList);
  filtersReference = this.filtersSource.asObservable();

  private currentFiltersList: Filter[] = [];

  constructor() { }

  toogleFilter(filter: Filter) {
    this.filtersReference.subscribe(filtersList => {
      debugger;
      //Change the source here
    });
  }
}

import { Filter } from './../../models/Filter';
import { FilterService } from './../../services/filter.service';
import { HousesService } from 'src/app/services/houses.service';
import { House } from './../../models/House';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {
  housesList: House[] = [];
  filtersList: Filter[] = [];

  /* filters*/
  hasRoomsFilter: boolean = true;
  hasValueFilter: boolean = true;
  hasIncompleteFilter: boolean = false;

  constructor(
    private housesService: HousesService,
    private filtersService: FilterService
  ) { }

  ngOnInit() {

    this.housesService.getHousesInitialization();

    //housesList when fetched or after get w/ localstorage is broadcasted here and to other components
    this.housesService.housesReference.subscribe(houses => {
      this.housesList = houses;
    });

    //Initialize filters
    this.filtersService.filtersReference.subscribe(filters => {
      this.filtersList = filters;
      for (let filter of filters) {
        switch (filter.filter) {
          case "rooms":
            this.hasRoomsFilter = filter.active;
          case "value":
            this.hasValueFilter = filter.active;
          case "incomplete":
            this.hasIncompleteFilter = filter.active;
          default:
            break
        }
      }
    });
  }
}

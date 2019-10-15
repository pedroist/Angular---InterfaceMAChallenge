import { HousesService } from './../../services/houses.service';
import { House } from './../../models/House';
import { Component, OnInit } from '@angular/core';
import { SortService } from 'src/app/services/sort.service';

@Component({
  selector: 'app-option3',
  templateUrl: './option3.component.html',
  styleUrls: ['./option3.component.scss']
})
export class Option3Component implements OnInit {
  housesList: House[] = [];

  constructor(
    private housesService: HousesService,
    private sortService: SortService,
  ) { }

  ngOnInit() {

    this.housesService.getHousesInitialization();

    //housesList when fetched or after get w/ localstorage is broadcasted here and to other components
    this.housesService.housesReference.subscribe(houses => {
      this.housesList = this.sortService.sortByStreetName(houses);
    });
  }
}

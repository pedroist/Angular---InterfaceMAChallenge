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

  /* filters*/
  hasRoomsFilter: boolean = false;
  hasValueFilter: boolean = true;
  hasIncompleteFilter: boolean = true;

  constructor(private housesService: HousesService) { }

  ngOnInit() {

    this.housesService.getHousesInitialization();

    //housesList when fetched or after get w/ localstorage is broadcasted here and to other components
    this.housesService.housesReference.subscribe(houses => {
      this.housesList = houses;
    });
  }
}

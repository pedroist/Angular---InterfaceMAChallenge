import { HousesService } from './../../services/houses.service';
import { House } from './../../models/House';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.scss']
})
export class ShowCaseComponent implements OnInit {
  housesList: House[] = [];

  constructor(private housesService: HousesService) { }

  ngOnInit() {

    this.housesService.getHousesInitialization();

    //housesList when fetched or after get w/ localstorage is broadcasted here and to other components
    this.housesService.housesReference.subscribe(houses => {
      this.housesList = houses;
    });
  }
}

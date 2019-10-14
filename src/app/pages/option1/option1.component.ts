import { House } from './../../models/House';
import { Component, OnInit } from '@angular/core';
import { HousesService } from 'src/app/services/houses.service';

@Component({
  selector: 'app-option1',
  templateUrl: './option1.component.html',
  styleUrls: ['./option1.component.css']
})
export class Option1Component implements OnInit {
  houses: House[];

  constructor(private housesService: HousesService) { }

  ngOnInit() {

    this.housesService.getHousesInitialization();

    //housesList when fetched or after get w/ localstorage is broadcasted here and to other components
    this.housesService.housesReference.subscribe(houses => {
      this.houses = houses;
    });
  }

}

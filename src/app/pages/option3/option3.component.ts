import { HousesService } from './../../services/houses.service';
import { House } from './../../models/House';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-option3',
  templateUrl: './option3.component.html',
  styleUrls: ['./option3.component.scss']
})
export class Option3Component implements OnInit {
  housesList: House[] = [];

  constructor(private housesService: HousesService) { }

  ngOnInit() {

    //housesList when fetched or after get w/ localstorage is broadcasted here and to other components
    this.housesService.housesReference.subscribe(houses => {
      this.housesList = houses;
    });
  }
}

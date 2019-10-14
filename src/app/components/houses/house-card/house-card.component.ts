import { House } from './../../../models/House';
import { Component, OnInit, Input } from '@angular/core';

import * as _ from "lodash";

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.scss']
})
export class HouseCardComponent implements OnInit {
  @Input() houseCard: House;
  @Input() index: number;

  imgPath: string = "";

  constructor() { }

  ngOnInit() {
    // Pick a random number to select an house image on the assets folder
    let randIndex = _.random(1, 10);
    this.imgPath = `../../../../assets/img/house${randIndex}.jpg`;
  }

}

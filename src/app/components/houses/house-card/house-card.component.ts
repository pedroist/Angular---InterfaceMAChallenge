import { House } from './../../../models/House';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.scss']
})
export class HouseCardComponent implements OnInit {
  @Input() houseCard: House;

  constructor() { }

  ngOnInit() {
  }

}

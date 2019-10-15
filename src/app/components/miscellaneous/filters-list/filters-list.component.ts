import { Filter } from './../../../models/Filter';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filters-list',
  templateUrl: './filters-list.component.html',
  styleUrls: ['./filters-list.component.css']
})
export class FiltersListComponent implements OnInit {
  @Input() filters: Filter[];

  constructor() { }

  ngOnInit() {
  }

}

import { FilterService } from './../../../services/filter.service';
import { Filter } from './../../../models/Filter';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss']
})
export class FilterButtonComponent implements OnInit {
  @Input() filter: Filter;

  constructor(private filterService: FilterService) { }

  ngOnInit() {
  }

  toogleFilter() {
    this.filterService.toogleFilter(this.filter.filter);
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Option1Component } from './pages/option1/option1.component';
import { Option2Component } from './pages/option2/option2.component';
import { Option3Component } from './pages/option3/option3.component';
import { ShowCaseComponent } from './pages/show-case/show-case.component';
import { DynamicComponent } from './pages/dynamic/dynamic.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HousesListComponent } from './components/houses/houses-list/houses-list.component';
import { HouseCardComponent } from './components/houses/house-card/house-card.component';
import { FilterButtonComponent } from './components/miscellaneous/filter-button/filter-button.component';
import { FilterModalComponent } from './components/miscellaneous/filter-modal/filter-modal.component';
import { SortDropdownComponent } from './components/miscellaneous/sort-dropdown/sort-dropdown.component';
import { FiltersListComponent } from './components/miscellaneous/filters-list/filters-list.component';
import { HousesFilterPipe } from './pipes/houses-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Option1Component,
    Option2Component,
    Option3Component,
    ShowCaseComponent,
    DynamicComponent,
    NavbarComponent,
    HousesListComponent,
    HouseCardComponent,
    FilterButtonComponent,
    FilterModalComponent,
    SortDropdownComponent,
    FiltersListComponent,
    HousesFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

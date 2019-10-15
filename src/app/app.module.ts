import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
import { HousesFilterRoomsPipe } from './pipes/houses-filter-rooms.pipe';
import { AppRoutingModule } from './routing/app-routing.module';
import { HousesFilterIncompletePipe } from './pipes/houses-filter-incomplete.pipe';
import { HousesFilterValuePipe } from './pipes/houses-filter-value.pipe';

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
    HousesFilterRoomsPipe,
    HousesFilterIncompletePipe,
    HousesFilterValuePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

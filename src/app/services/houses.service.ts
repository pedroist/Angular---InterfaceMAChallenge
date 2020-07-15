import { DistanceService } from './distance.service';
import { House } from './../models/House';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
};

//coordinates for the address of Eberswalder Straße 55 (exercise reference)
const refCoords = {
  lat: 52.5418739,
  lon: 13.4057378
};

@Injectable({
  providedIn: 'root'
})
export class HousesService {
  url: string = 'https://demo.interfacema.de/programming-assessment-1.0/buildings';

  private housesSource = new BehaviorSubject<House[]>([]);
  housesReference = this.housesSource.asObservable();

  constructor(
    private http: HttpClient,
    private dist: DistanceService
  ) { }

  getHousesHttpRequest(): Observable<any> {

    /* OPTION1 - FROM JSON LOCAL FILE: */
    return this.getLocalJSON();

    /* // OPTION2 - FROM HTTP SERVICE:
    let data = this.http
      .get(this.url)
      .pipe(catchError(this.handleError));
    return data;
    */

    //NOTE: if we wanted to make dinamically this switch: test the service,
    // if fails use the local JSON file, we could make interceptor and intercept the response
    // to return file.
  }

  getHousesInitialization() {

    // checking if housesList is already saved with localStorage
    let houses = JSON.parse(localStorage.getItem('housesList'));

    if (houses) {
      this.housesSource.next(houses);
    } else {
      this.getHousesHttpRequest().subscribe(data => {

        // save the housesList with localStorage to persist this data
        data.houses.map(house => {
          if (house.coords) {
            house.distance = this.dist.computeDistance(
              house.coords.lat, house.coords.lon, refCoords.lat, refCoords.lon, "K");
          }
        });

        localStorage.setItem('housesList', JSON.stringify(data.houses));

        // broadcast housesList to other components
        this.housesSource.next(data.houses);
      });
    }
  }

  handleError(error) {

    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  getLocalJSON(): Observable<any> {
    return this.http.get("assets/houses-data-fetched.json");
  }
}

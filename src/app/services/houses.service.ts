import { House } from './../models/House';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class HousesService {
  url: string = 'https://demo.interfacema.de/programming-assessment-1.0/buildings';

  private housesSource = new BehaviorSubject<House[]>([]);
  housesReference = this.housesSource.asObservable();

  constructor(private http: HttpClient) { }

  getHousesHttpRequest(): Observable<any> {
    let data = this.http.get(this.url);
    return data;
  }

  getHousesInitialization() {

    // checking if housesList is already saved with localStorage
    let houses = JSON.parse(localStorage.getItem('housesList'));

    if (houses) {
      this.housesSource.next(houses);
    } else {
      this.getHousesHttpRequest().subscribe(data => {

        // save the housesList with localStorage to persist this data
        localStorage.setItem('housesList', JSON.stringify(data.houses));

        // broadcast housesList to other components
        this.housesSource.next(data.houses);
      });
    }
  }
}

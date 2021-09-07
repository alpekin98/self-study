import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StationService {
  stations: Array<Station>;

  constructor() {
    if (localStorage.getItem('stationList')) {
      this.stations = JSON.parse(<any>localStorage.getItem('stationList'));
    } else {
      this.stations = [];
    }
  }

  getStations() {
    return this.stations;
  }

  addStation(station: Station) {
    this.stations.push(station);
    localStorage.setItem('stationList', JSON.stringify(this.stations));
  }

  deleteStation(index: number) {
    this.stations.splice(index, 1);
    localStorage.setItem('stationList', JSON.stringify(this.stations));
  }
}

export class Station {
  stationName: string;
  stationLocation: string;
  stationStatus: boolean;

  constructor(
    stationName: string,
    stationLocation: string,
    stationStatus: boolean
  ) {
    this.stationName = stationName;
    this.stationLocation = stationLocation;
    this.stationStatus = stationStatus;
  }
}

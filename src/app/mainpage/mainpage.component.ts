import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StationService, Station } from '../station.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent implements OnInit {
  cityList: Array<string> = ['Ankara', 'İstanbul'];
  stationList: Array<Station>;

  constructor(private stationService: StationService) {
    this.stationList = stationService.getStations();
  }

  ngOnInit(): void {}

  addStation(form: NgForm) {
    let station: Station = {
      stationName: form.value.stationName,
      stationLocation: form.value.stationLocation,
      stationStatus: form.value.stationStatus,
    };
    this.stationService.addStation(station);
    form.resetForm();
  }

  deleteStation(index: number) {
    this.stationService.deleteStation(index);
  }
}

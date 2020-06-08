import { Component, OnInit } from '@angular/core';
import { FetchData } from '../services/fetch-data.service';
import { DataStore } from '../services/data-store.service';
import { City } from '../modal/city.modal';
import { State } from '../modal/state.modal';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Country } from '../modal/country.modal';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  public allCityData: City[];
  public allStateData: State[];
  public id: string;
  public countryData: Country;
  tableData = [];
  tableConfig = [
    {
      header: 'Location',
      data: 'location'
    },
    {
      header: 'Confirmed',
      data: 'confirmed'
    },
    {
      header: 'Dead',
      data: 'dead'
    },
    {
      header: 'Recovered',
      data: 'recovered'
    }
  ];

  constructor(
    private dataStore: DataStore, 
    private fetchData: FetchData, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.setData();
        }
      );
    if (this.allCityData.length === 0) {
      this.fetchData.initData();
    } else {
      this.setData();
    }

    this.fetchData.countryDataChanged.subscribe(() => {
      this.setData();
    });
  }

  setData() {
    this.allCityData = [...this.dataStore.getCityData()].filter(city => city.country_code === this.id);
    this.allStateData = [...this.dataStore.getStateData()].filter(state => state.country_code === this.id);
    this.countryData = [...this.dataStore.getCountryData()].find(country => country.country_code === this.id);
  }
}

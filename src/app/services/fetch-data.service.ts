import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { DataStore } from './data-store.service';
import { forkJoin } from 'rxjs';
import { Country } from '../modal/country.modal';

@Injectable()
export class FetchData {
    countryDataChanged = new EventEmitter<any>();
    constructor(private http: HttpClient, private dataStore: DataStore){}

    fetchCountryData() {
        return this.http.get('https://www.trackcorona.live/api/countries');
    }

    fetchStateData() {
        return this.http.get('https://www.trackcorona.live/api/provinces');
    }

    fetchCityData() {
        return this.http.get('https://www.trackcorona.live/api/cities');
    }

    initData() {
        forkJoin([
            this.fetchCountryData(), 
            this.fetchStateData(), 
            this.fetchCityData()
        ]).subscribe(responseData => {
            this.dataStore.setCountryData(responseData[0]['data']);
            this.dataStore.setStateData(responseData[1]['data']);
            this.dataStore.setCityData(responseData[2]['data']);
            this.countryDataChanged.emit();
        });
    }
}
import { Country } from '../modal/country.modal';
import { State } from '../modal/state.modal';
import { City } from '../modal/city.modal';
import { Injectable, EventEmitter} from '@angular/core';

@Injectable({providedIn: 'root'})
export class DataStore {
    private countryData: Country[] = [];
    private stateData: State[] = [];
    private cityData: City[] = [];

    setCountryData(data: Country[]) {
        this.countryData = data;
    }

    getCountryData() {
        return this.countryData.slice();
    }

    setStateData(data: State[]) {
        this.stateData = data;
    }

    getStateData() {
        return this.stateData.slice();
    }

    setCityData(data: City[]) {
        this.cityData = data;
    }

    getCityData() {
        return this.cityData.slice();
    }
}
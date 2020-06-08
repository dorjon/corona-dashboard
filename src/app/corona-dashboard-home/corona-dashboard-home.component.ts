import { Component, OnInit, Input } from '@angular/core';
import { DataStore } from '../services/data-store.service';
import { FetchData } from '../services/fetch-data.service';
import { Country } from '../modal/country.modal';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-corona-dashboard-home',
  templateUrl: './corona-dashboard-home.component.html',
  styleUrls: ['./corona-dashboard-home.component.css']
})
export class CoronaDashboardHomeComponent implements OnInit {
  private allCountrydata = [];
  confirmedCases = '';
  deadCases = '';
  recoveredcases= '';
  countryData = [];
  searchText: String= '';
  tableData = [];
  tableConfig = [
    {
      header: 'Country',
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
    private fetchData: FetchData, 
    private dataStore: DataStore, 
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    //setInterval(() => this.getCoronaData() ,3000);
    //this.getCoronaData();
    this.fetchData.initData();
    this.fetchData.countryDataChanged
      .subscribe(
        () => {
          this.allCountrydata = this.dataStore.getCountryData();
          this.countryData = this.dataStore.getCountryData();
          this.tableData = this.countryData;
          this.confirmedCases = this.countryData.map(country => country.confirmed).reduce((a, b) => a + b);
          this.deadCases = this.countryData.map(country => country.dead).reduce((a, b) => a + b);
          this.recoveredcases = this.countryData.map(country => country.recovered).reduce((a, b) => a + b);
        }
      );

  }

  getFlag(countryCode: string) {
    return ['flag-icon', `flag-icon-${countryCode}`];
  }

  onChangeSearch() {
    console.log(this.searchText);
    this.countryData = this.allCountrydata.slice().filter(country => {
      return country.location.toLowerCase().includes(this.searchText) || country.confirmed.toString().includes(this.searchText) || country.recovered.toString().includes(this.searchText);
    })
  }

  getAllCountryData() {
    return this.countryData;
  }

  onClickRow(id: string) {
    this.router.navigate([id], {relativeTo: this.route});
  }
}

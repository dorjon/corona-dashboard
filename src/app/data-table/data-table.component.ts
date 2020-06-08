import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../modal/city.modal';
import { Country } from '../modal/country.modal';
import { State } from '../modal/state.modal';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
@Input() tableConfig: [{header: string, data: string}];
@Input() tableData: City[] | State[] | Country[];
@Output() onClickRow = new EventEmitter<any>();
searchText: string = "";
copyTableData: City[] | State[] | Country[];
  constructor() { 
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.copyTableData = this.tableData.slice();
  }

  getFlag(countryCode: string) {
    return ['flag-icon', `flag-icon-${countryCode}`];
  }

  onChangeSearch() {
    this.copyTableData = this.tableData.slice().filter(country => {
      return country.location.toLowerCase().includes(this.searchText) || country.confirmed.toString().includes(this.searchText) || country.dead.toString().includes(this.searchText);
    })
  }

  onClickRowTrigger(data: City | State | Country) {
    this.onClickRow.emit(data.country_code);
  }

}

import { Component, OnInit } from '@angular/core';
import { FetchData } from './services/fetch-data.service';
import { DataStore } from './services/data-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'corona-dashboard';

  constructor(private fetchData: FetchData, private dataStore: DataStore) {}

  ngOnInit() {
  }

}

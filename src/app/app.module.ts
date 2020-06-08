import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
 
import { CoronaDashboardHomeComponent } from './corona-dashboard-home/corona-dashboard-home.component';
import { FetchData } from './services/fetch-data.service';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CoronaOverviewComponent } from './corona-overview/corona-overview.component';
import { DataTableComponent } from './data-table/data-table.component';


@NgModule({
  declarations: [
    AppComponent,
    CoronaDashboardHomeComponent,
    CountryDetailsComponent,
    CoronaOverviewComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    FetchData
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

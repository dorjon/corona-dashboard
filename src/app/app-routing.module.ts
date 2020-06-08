import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoronaDashboardHomeComponent } from './corona-dashboard-home/corona-dashboard-home.component';
import { CountryDetailsComponent } from './country-details/country-details.component';


const routes: Routes = [
  {path: '', redirectTo: '/country', pathMatch: 'full'},
  { path: 'country', component: CoronaDashboardHomeComponent},
  { path: 'country/:id', component: CountryDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

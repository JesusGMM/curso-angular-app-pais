import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CountriesRoutingModule } from './countries-routing.module';

import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountryTableComponent } from './components/country-table/country-table.component';


@NgModule({
	declarations: [
		ByCapitalComponent,
		ByCountryComponent,
		ByRegionComponent,
		CountryPageComponent,
		CountryTableComponent,
	],
	imports: [
		CommonModule,
		CountriesRoutingModule,
		SharedModule,
	]
})
export class CountriesModule { }

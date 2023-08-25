import { Component, OnInit } from '@angular/core';

import { CountriesService } from '../../services/countries.service';

import { Country } from '../../interfaces/country';

@Component({
	selector: 'app-by-country-page',
	templateUrl: './by-country.component.html',
})
export class ByCountryComponent implements OnInit {

	public countries: Country[] = [];
	public initialValue: string = '';

	constructor(private countriesService: CountriesService) { }


	ngOnInit(): void {
		this.countries = this.countriesService.cacheStore.byCountries.countries;
		this.initialValue = this.countriesService.cacheStore.byCountries.term;
	}

	searchByCountry(term: string): void {
		this.countriesService.searchCountry(term).subscribe(countries => this.countries = countries);
	}

}

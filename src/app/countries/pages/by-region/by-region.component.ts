import { Component } from '@angular/core';

import { CountriesService } from '../../services/countries.service';

import { Country } from '../../interfaces/country';

@Component({
	selector: 'app-by-region-page',
	templateUrl: './by-region.component.html',
})
export class ByRegionComponent {

	public countries: Country[] = [];

	constructor(private countriesService: CountriesService) { }

	searchByRegion(region: string): void {
		this.countriesService.searchRegion(region).subscribe(countries => this.countries = countries);
	}

}

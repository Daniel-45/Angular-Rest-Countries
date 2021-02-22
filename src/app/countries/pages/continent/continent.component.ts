import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styles: [
  ]
})
export class ContinentComponent {

  continents: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  activeContinent = '';

  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  activateRegion(region: string) {

    if (region === this.activeContinent) { return; }

    this.activeContinent = region;

    this.countries = [];

    this.countryService.searchByContinent(region)
      .subscribe(countries => this.countries = countries);
  }

  getClassCSS(region: string): string {
    return (region === this.activeContinent) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

}

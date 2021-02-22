import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class CountryComponent {

  searchTerm = '';

  isError = false;

  countries: Country[] = [];

  suggestedCountries: Country[] = [];

  showSuggestions = false;

  constructor(private countryService: CountryService) { }

  search(searchTerm: string) {

    this.showSuggestions = false;

    this.isError = false;

    this.searchTerm = searchTerm;

    // Avoid empty searches
    if (this.searchTerm.trim().length === 0) {
      return;
    }

    this.countryService.searchByCountry(this.searchTerm)
      .subscribe((countries) => {
        console.log(countries);
        this.countries = countries;
      }, (error) => {
        this.isError = true;
        this.countries = [];
      });

  }

  suggestions(searchTerm: string) {

    this.isError = false;

    this.searchTerm = searchTerm;

    this.showSuggestions = true;

    // Create suggestions
    this.countryService.searchByCountry(searchTerm)
      .subscribe(
        countries => this.suggestedCountries = countries.splice(0, 5),
        (error) => this.suggestedCountries = []
        );
  }

}

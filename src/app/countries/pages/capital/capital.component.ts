import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [
  ]
})
export class CapitalComponent {

  searchTerm = '';

  isError = false;

  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  search(searchTerm: string) {

    this.isError = false;

    this.searchTerm = searchTerm;

    // Avoid empty searches
    if (this.searchTerm.trim().length === 0) {
      return;
    }

    this.countryService.searchByCapital(this.searchTerm)
      .subscribe((countries) => {
        this.countries = countries;
      }, (error) => {
        this.isError = true;
        this.countries = [];
      });

  }

}

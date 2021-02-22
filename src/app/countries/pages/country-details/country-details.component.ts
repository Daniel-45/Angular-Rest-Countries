import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styles: [
  ]
})
export class CountryDetailsComponent implements OnInit {

  // Country can be null but treat as if it always had data
  country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ code }) => this.countryService.searchByAlphaCode(code)),
        tap(console.log) // Receive the product of the Observable and print the response
      )
      .subscribe(country => this.country = country);
  }

}

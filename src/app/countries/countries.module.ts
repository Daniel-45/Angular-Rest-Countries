import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CapitalComponent } from './pages/capital/capital.component';
import { CountryComponent } from './pages/country/country.component';
import { ContinentComponent } from './pages/continent/continent.component';
import { CountryDetailsComponent } from './pages/country-details/country-details.component';
import { InputComponent } from './components/input/input.component';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


@NgModule({
  declarations: [
    CapitalComponent,
    CountryComponent,
    ContinentComponent,
    CountryDetailsComponent,
    InputComponent,
    CountriesTableComponent,
    NotFoundComponent
  ],
  exports: [
    CapitalComponent,
    CountryComponent,
    ContinentComponent,
    CountryDetailsComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountriesModule { }

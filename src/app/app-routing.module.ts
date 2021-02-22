import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './countries/pages/country/country.component';
import { CapitalComponent } from './countries/pages/capital/capital.component';
import { ContinentComponent } from './countries/pages/continent/continent.component';
import { CountryDetailsComponent } from './countries/pages/country-details/country-details.component';
import { NotFoundComponent } from './countries/pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: CountryComponent, pathMatch: 'full' },
  { path: 'capital', component: CapitalComponent },
  { path: 'continent', component: ContinentComponent },
  { path: 'country-details/:code', component: CountryDetailsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

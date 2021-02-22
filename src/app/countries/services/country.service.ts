import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseURL = 'https://restcountries.eu/rest/v2';

  get httParams() {
    return new HttpParams().set('fields', 'name;capital;alpha2Code;alpha3Code;flag;population');
  }


  constructor(private http: HttpClient) { }

  searchByCountry(searchTerm: string): Observable<Country[]> {

    const url = `${this.baseURL}/name/${searchTerm}`;

    return this.http.get<Country[]>(url, { params: this.httParams});
  }

  searchByCapital(searchTerm: string): Observable<Country[]> {

    const url = `${this.baseURL}/capital/${searchTerm}`;

    return this.http.get<Country[]>(url, { params: this.httParams});
  }

  searchByAlphaCode(searchTerm: string): Observable<Country> {

    const url = `${this.baseURL}/alpha/${searchTerm}`;

    return this.http.get<Country>(url);
  }

  searchByContinent(continent: string): Observable<Country[]> {

    const url = `${this.baseURL}/region/${continent}`;

    return this.http.get<Country[]>(url, { params: this.httParams});
  }

}

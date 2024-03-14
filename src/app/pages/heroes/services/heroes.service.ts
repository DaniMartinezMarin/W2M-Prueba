import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroesResponse } from '../interfaces/hero.interface';
import { Observable, map } from 'rxjs';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private _apiKey = '10224864604392271';

  constructor(private _http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    const url = `https://superheroapi.com/api/${this._apiKey}/search/%man`;

    return this._http
      .get<HeroesResponse>(url)
      .pipe(
        map((data: HeroesResponse) =>
          data.results.map((hero) => new Hero(hero))
        )
      );
  }
}

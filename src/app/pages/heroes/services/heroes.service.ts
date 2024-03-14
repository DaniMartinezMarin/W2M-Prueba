import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroInterface } from '../interfaces/hero.interface';
import { Observable, map, of } from 'rxjs';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private _apiHeroesUrl = 'api/heroes';

  constructor(private _http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this._http
      .get<HeroInterface[]>(this._apiHeroesUrl)
      .pipe(map((heroes) => heroes.map((hero) => new Hero(hero))));
  }

  searchHeroes(term: string): Observable<Hero[]> {
    return this._http
      .get<Hero[]>(`${this._apiHeroesUrl}/?name=${term}`)
      .pipe(map((heroes) => heroes.map((hero) => new Hero(hero))));
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroInterface } from '../interfaces/hero.interface';
import { Observable, map, of } from 'rxjs';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private _apiHeroesUrl = 'api/heroes';
  private _httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private _http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this._http
      .get<HeroInterface[]>(this._apiHeroesUrl)
      .pipe(map((heroes) => heroes.map((hero) => new Hero(hero))));
  }

  deleteHero(heroId: number): Observable<Hero> {
    const url = `${this._apiHeroesUrl}/${heroId}`;
    return this._http.delete<Hero>(url, this._httpOptions);
  }
}

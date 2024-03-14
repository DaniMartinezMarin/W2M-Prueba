import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Hero } from './models/hero.model';
import { HeroesService } from './services/heroes.service';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime, startWith, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, HeroComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent implements OnInit {
  private searchHero = new Subject<string>();
  heroes$!: Observable<Hero[]>;

  constructor(private _heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroes$ = this.searchHero.pipe(
      startWith(''),
      debounceTime(300),
      switchMap((heroName: string) =>
        heroName
          ? this._heroesService.searchHeroes(heroName)
          : this._heroesService.getHeroes()
      )
    );
  }

  onSearch(term: string): void {
    this.searchHero.next(term);
  }
}

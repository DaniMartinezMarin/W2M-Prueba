import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { Hero } from './models/hero.model';
import { HeroesService } from './services/heroes.service';
import { Subject } from 'rxjs/internal/Subject';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
} from 'rxjs/operators';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    HeroComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  heroName = new FormControl<string | Hero>('');
  filteredOptions?: Observable<Hero[]>;

  constructor(private _heroesService: HeroesService) {}

  ngOnInit(): void {
    this._heroesService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes));

    this.filteredOptions = this.heroName.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      map((value) => {
        console.log('valor', value);

        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.heroes.slice();
      })
    );
  }

  displayFn(hero: Hero): string {
    return hero && hero.name ? hero.name : '';
  }

  private _filter(name: string): Hero[] {
    const filterValue = name.toLowerCase();

    return this.heroes.filter((hero) =>
      hero.name.toLowerCase().includes(filterValue)
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { Hero } from './models/hero.model';
import { HeroesService } from './services/heroes.service';
import { debounceTime, delay, finalize, map, startWith } from 'rxjs/operators';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { BackofficeManagerService } from '../../services/backoffice-manager.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    AsyncPipe,
    TitleCasePipe,
    HeroComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  heroName = new FormControl<string | Hero>('');
  filteredOptions?: Observable<Hero[]>;

  constructor(
    private _heroesService: HeroesService,
    private _matDialog: MatDialog,
    private _router: Router,
    private _backofficeManagerService: BackofficeManagerService
  ) {}

  ngOnInit(): void {
    this._backofficeManagerService.addPetition(true);
    this._heroesService
      .getHeroes()
      .pipe(
        delay(1000),
        finalize(() => this._backofficeManagerService.removePetition(true))
      )
      .subscribe((heroes) => {
        this.heroes = heroes;
      });

    this.filteredOptions = this.heroName.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.heroes.slice();
      })
    );
  }

  deleteHero(idToRemove: number) {
    this._matDialog
      .open(ConfirmModalComponent)
      .afterClosed()
      .subscribe((confirm) => {
        if (confirm) {
          const index = this.heroes.findIndex((item) => item.id === idToRemove);
          if (index !== -1) {
            this._backofficeManagerService.addPetition(true);
            this._heroesService
              .deleteHero(idToRemove)
              .pipe(
                delay(500),
                finalize(() =>
                  this._backofficeManagerService.removePetition(true)
                )
              )
              .subscribe(() => {
                this.heroes.splice(index, 1);
                this.heroName.updateValueAndValidity();
              });
          }
        }
      });
  }

  goToCreatePage() {
    this._router.navigate(['heroes', 'create']);
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

import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { NgFor, NgIf } from '@angular/common';
import { Hero } from './models/hero.model';
import { HeroesService } from './services/heroes.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [NgIf, NgFor, HeroComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private _heroesService: HeroesService) {}

  ngOnInit(): void {
    this._heroesService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes));
  }
}

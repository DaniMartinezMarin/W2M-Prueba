import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Hero } from '../../models/hero.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Location } from '@angular/common';
import { BackofficeManagerService } from '../../../../services/backoffice-manager.service';
import { delay, finalize } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss',
})
export class HeroDetailComponent implements OnInit {
  hero: Hero = {
    id: 0,
    name: '',
    fullName: '',
    publisher: '',
    image: '',
  };

  heroForm: FormGroup = this._fb.group({});

  isCreateMode = true;

  constructor(
    private _route: ActivatedRoute,
    private _fb: FormBuilder,
    private _heroService: HeroesService,
    private _location: Location,
    private _router: Router,
    private _backofficeManagerService: BackofficeManagerService
  ) {}

  ngOnInit(): void {
    this._initForm();

    if (!this._router.url.includes('create')) {
      const id = Number(this._route.snapshot.paramMap.get('id'));
      this.isCreateMode = false;
      this.getHero(id);
    }
  }

  getHero(id: number): void {
    this._backofficeManagerService.addPetition(true);
    this._heroService
      .getHero(id)
      .pipe(
        delay(500),
        finalize(() => this._backofficeManagerService.removePetition(true))
      )
      .subscribe((hero) => {
        this.hero = hero;
        this._initForm();
      });
  }

  saveHero() {
    const heroToSave = this.heroForm.getRawValue() as Hero;

    if (this.isCreateMode) {
      this._backofficeManagerService.addPetition(true);
      this._heroService
        .createHero(heroToSave)
        .pipe(
          finalize(() => this._backofficeManagerService.removePetition(true))
        )
        .subscribe(() => this._location.back());
    } else {
      heroToSave.id = this.hero.id;
      this._backofficeManagerService.addPetition(true);
      this._heroService
        .updateHero(heroToSave)
        .pipe(
          finalize(() => this._backofficeManagerService.removePetition(true))
        )
        .subscribe(() => this._location.back());
    }
  }

  private _initForm() {
    this.heroForm = this._fb.group({
      name: [this.hero.name, Validators.required],
      fullName: [this.hero.fullName],
      publisher: [this.hero.publisher],
      image: [this.hero.image],
    });
  }
}

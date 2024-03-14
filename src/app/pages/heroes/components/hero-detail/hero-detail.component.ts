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
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Location } from '@angular/common';

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
    RouterLink
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

  heroForm: FormGroup = this._fb.group({
    id: '',
    name: '',
    fullName: '',
    publisher: '',
    image: '',
  });

  constructor(
    private route: ActivatedRoute,
    private _fb: FormBuilder,
    private _heroService: HeroesService,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this._heroService.getHero(id).subscribe((hero) => {
      this.hero = hero;
      this._initForm();
    });
  }

  saveHero() {
    const heroToSave = this.heroForm.getRawValue() as Hero;
    this._heroService.updateHero(heroToSave).subscribe(() => this._location.back());
  }

  private _initForm() {
    this.heroForm = this._fb.group({
      id: [this.hero.id, Validators.required],
      name: [this.hero.name, Validators.required],
      fullName: [this.hero.fullName],
      publisher: [this.hero.publisher],
      image: [this.hero.image],
    });

    this.heroForm.valueChanges.subscribe((formValues) => {
      this.hero = {
        ...this.hero,
        ...formValues
      };
    });
  }
}

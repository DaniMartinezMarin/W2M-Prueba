import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';

export const HERO_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./heroes.component').then((c) => c.HeroesComponent),
  },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('./components/hero-detail/hero-detail.component').then(
        (c) => c.HeroDetailComponent
      ),
  },
];

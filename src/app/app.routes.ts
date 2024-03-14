import { Routes } from '@angular/router';
import { HeroesComponent } from './pages/heroes/heroes.component';

export const routes: Routes = [
  {
    path: 'heroes',
    loadChildren: () =>
      import('./pages/heroes/heroes.routes').then((m) => m.HERO_ROUTES),
  },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
];

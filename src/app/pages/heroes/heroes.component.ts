import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {

}

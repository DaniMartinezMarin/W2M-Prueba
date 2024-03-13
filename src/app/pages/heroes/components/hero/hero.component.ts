import { Component } from '@angular/core';
import { HeroInterface } from '../../interfaces/hero.interface';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  hero: HeroInterface = {
    id: 1,
    name: 'Spiderman',
  };
}

import { Component, Input } from '@angular/core';
import { NgIf, UpperCasePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgIf, UpperCasePipe, MatCardModule, MatButtonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input() hero?: Hero;
}

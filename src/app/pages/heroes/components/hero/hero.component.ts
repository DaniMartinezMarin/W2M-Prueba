import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [UpperCasePipe, MatCardModule, MatButtonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input() hero?: Hero;
  @Output() delete = new EventEmitter<number>();
}

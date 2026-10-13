import { Component, input } from '@angular/core';
import { TemaAprendizaje } from '../../../models/tema-aprendizaje';

@Component({
  selector: 'app-tema-card',
  templateUrl: './tema-card.html',
  styleUrl: './tema-card.css',
})
export class TemaCard {
  tema = input.required<TemaAprendizaje>();
}

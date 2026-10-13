import { Component, input } from '@angular/core';
import { ItemTemaLibre } from '../../../models/item-tema-libre';

@Component({
  selector: 'app-juego-card',
  templateUrl: './juego-card.html',
  styleUrl: './juego-card.css',
})
export class JuegoCard {
  juego = input.required<ItemTemaLibre>();
}
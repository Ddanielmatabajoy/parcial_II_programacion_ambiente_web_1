import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-filtro-generos',
  templateUrl: './filtro-generos.html',
  styleUrl: './filtro-generos.css',
})
export class FiltroGeneros {
  generos = input.required<string[]>();
  activo = input.required<string>();
  seleccionado = output<string>();
}
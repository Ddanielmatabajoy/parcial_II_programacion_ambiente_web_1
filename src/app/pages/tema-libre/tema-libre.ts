import { Component, computed, signal } from '@angular/core';
import { ItemTemaLibre } from '../../models/item-tema-libre';
import { JuegoCard } from '../../components/tema-libre/juego-card/juego-card';
import { FiltroGeneros } from '../../components/tema-libre/filtro-generos/filtro-generos';

@Component({
  selector: 'app-tema-libre',
  imports: [JuegoCard, FiltroGeneros],
  templateUrl: './tema-libre.html',
  styleUrl: './tema-libre.css',
})
export class TemaLibre {
  generos: string[] = ['Todos', 'Aventura', 'RPG', 'Deportes', 'Plataformas', 'Sandbox'];

  generoActivo = signal<string>('Todos');

  juegos: ItemTemaLibre[] = [
    {
      id: 1,
      titulo: 'The Legend of Zelda: Breath of the Wild',
      genero: 'Aventura',
      plataforma: 'Nintendo Switch',
      anio: 2017,
      calificacion: 9.8,
      descripcion: 'Exploración libre en un mundo abierto lleno de secretos y puzles.',
      destacado: true,
    },
    {
      id: 2,
      titulo: 'Elden Ring',
      genero: 'RPG',
      plataforma: 'PC / PlayStation / Xbox',
      anio: 2022,
      calificacion: 9.5,
      descripcion: 'Un RPG de acción desafiante en un vasto mundo de fantasía oscura.',
      destacado: true,
    },
    {
      id: 3,
      titulo: 'EA Sports FC 25',
      genero: 'Deportes',
      plataforma: 'PC / PlayStation / Xbox',
      anio: 2024,
      calificacion: 7.8,
      descripcion: 'Simulador de fútbol con modos online y carrera de manager.',
      destacado: false,
    },
    {
      id: 4,
      titulo: 'Celeste',
      genero: 'Plataformas',
      plataforma: 'PC / Switch',
      anio: 2018,
      calificacion: 9.2,
      descripcion: 'Plataformas de precisión con una historia sobre superar los obstáculos.',
      destacado: false,
    },
    {
      id: 5,
      titulo: 'Minecraft',
      genero: 'Sandbox',
      plataforma: 'Multiplataforma',
      anio: 2011,
      calificacion: 9.0,
      descripcion: 'Construye, explora y sobrevive en mundos generados proceduralmente.',
      destacado: true,
    },
    {
      id: 6,
      titulo: 'Hollow Knight',
      genero: 'Plataformas',
      plataforma: 'PC / Switch',
      anio: 2017,
      calificacion: 9.4,
      descripcion: 'Metroidvania de ambientación sombría con un mundo subterráneo enorme.',
      destacado: false,
    },
    {
      id: 7,
      titulo: 'The Witcher 3',
      genero: 'RPG',
      plataforma: 'PC / PlayStation / Xbox',
      anio: 2015,
      calificacion: 9.7,
      descripcion: 'Historia profunda con decisiones que cambian el rumbo del mundo.',
      destacado: false,
    },
  ];

  juegosFiltrados = computed(() => {
    const genero = this.generoActivo();
    return genero === 'Todos'
      ? this.juegos
      : this.juegos.filter((j) => j.genero === genero);
  });

  seleccionarGenero(genero: string): void {
    this.generoActivo.set(genero);
  }
}
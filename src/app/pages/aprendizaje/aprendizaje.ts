import { Component } from '@angular/core';
import { TemaAprendizaje, ProyectoCurso } from '../../models/tema-aprendizaje';
import { TemaCard } from '../../components/aprendizaje/tema-card/tema-card';
import { ProyectosTabla } from '../../components/aprendizaje/proyectos-tabla/proyectos-tabla';

@Component({
  selector: 'app-aprendizaje',
  imports: [TemaCard, ProyectosTabla],
  templateUrl: './aprendizaje.html',
  styleUrl: './aprendizaje.css',
})
export class Aprendizaje {
  temas: TemaAprendizaje[] = [
    {
      id: 1,
      icono: '🧱',
      titulo: 'HTML5 y CSS3',
      descripcion: 'Estructura semántica de páginas y estilos para darles forma.',
      categoria: 'Fundamentos',
      tecnologias: ['HTML5', 'CSS3'],
      conocimientos: ['Etiquetas semánticas', 'Flexbox y Grid', 'Diseño responsive'],
    },
    {
      id: 2,
      icono: '📜',
      titulo: 'TypeScript',
      descripcion: 'JavaScript con tipos para escribir código más seguro y ordenado.',
      categoria: 'Fundamentos',
      tecnologias: ['TypeScript'],
      conocimientos: ['Tipos básicos', 'Interfaces y types', 'Clases'],
    },
    {
      id: 3,
      icono: '🧩',
      titulo: 'Componentes de Angular',
      descripcion: 'Creación y composición de componentes reutilizables.',
      categoria: 'Angular',
      tecnologias: ['Angular', 'Angular CLI'],
      conocimientos: ['Componentes standalone', 'Imports', 'Composición'],
    },
    {
      id: 4,
      icono: '🧭',
      titulo: 'Enrutamiento',
      descripcion: 'Navegación entre páginas sin recargar la aplicación.',
      categoria: 'Angular',
      tecnologias: ['Angular Router'],
      conocimientos: ['Rutas', 'routerLink', 'router-outlet'],
    },
    {
      id: 5,
      icono: '🔁',
      titulo: 'Renderizado dinámico',
      descripcion: 'Generar la interfaz a partir de datos con control flow.',
      categoria: 'Angular',
      tecnologias: ['@for', '@if', 'Interpolación'],
      conocimientos: ['Listas con @for', 'Condicionales con @if', 'Uso de track'],
    },
    {
      id: 6,
      icono: '🎨',
      titulo: 'Bootstrap 5',
      descripcion: 'Framework CSS para construir interfaces rápidas y consistentes.',
      categoria: 'Herramientas',
      tecnologias: ['Bootstrap 5'],
      conocimientos: ['Sistema de grillas', 'Cards y navbar', 'Utilidades'],
    },
    {
      id: 7,
      icono: '🌿',
      titulo: 'Git y GitHub',
      descripcion: 'Control de versiones y trabajo colaborativo.',
      categoria: 'Herramientas',
      tecnologias: ['Git', 'GitHub'],
      conocimientos: ['Commits descriptivos', 'Ramas', 'Push y pull'],
    },
  ];

  proyectos: ProyectoCurso[] = [
    {
      id: 1,
      nombre: 'Parcial II: Aplicación web con Angular',
      tipo: 'Parcial',
      descripcion: 'Hoja de vida, aprendizaje del curso y tema libre con enrutamiento.',
      tecnologias: ['Angular', 'Bootstrap', 'TypeScript'],
      estado: 'En progreso',
    },
    {
      id: 2,
      nombre: 'Página de presentación personal',
      tipo: 'Taller',
      descripcion: 'Primera página con HTML y CSS puros.',
      tecnologias: ['HTML5', 'CSS3'],
      estado: 'Completado',
    },
    {
      id: 3,
      nombre: 'Catálogo de productos',
      tipo: 'Proyecto',
      descripcion: 'Listado de productos con tarjetas generadas desde un arreglo.',
      tecnologias: ['Angular', '@for', 'Bootstrap'],
      estado: 'Completado',
    },
  ];
}
import { Component, input } from '@angular/core';
import { ProyectoCurso } from '../../../models/tema-aprendizaje';

@Component({
  selector: 'app-proyectos-tabla',
  templateUrl: './proyectos-tabla.html',
  styleUrl: './proyectos-tabla.css',
})
export class ProyectosTabla {
  proyectos = input.required<ProyectoCurso[]>();
}
import { Component } from '@angular/core';
import { Habilidad } from '../../../models/hoja-de-vida';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.html',
  styleUrl: './habilidades.css',
})
export class Habilidades {
  habilidades: Habilidad[] = [
    { nombre: 'JavaScript / TypeScript', nivel: 75, categoria: 'Programación' },
    { nombre: 'Angular', nivel: 60, categoria: 'Programación' },
    { nombre: 'Python', nivel: 70, categoria: 'Programación' },
    { nombre: 'C / C++', nivel: 65, categoria: 'Electrónica' },
    { nombre: 'Arduino y ESP32', nivel: 70, categoria: 'Electrónica' },
    { nombre: 'Circuitos digitales', nivel: 60, categoria: 'Electrónica' },
    { nombre: 'Git y GitHub', nivel: 70, categoria: 'Herramientas' },
    { nombre: 'Trabajo en equipo', nivel: 85, categoria: 'Blandas' },
  ];
}
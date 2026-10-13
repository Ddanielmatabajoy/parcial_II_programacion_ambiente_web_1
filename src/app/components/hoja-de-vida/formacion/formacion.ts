import { Component } from '@angular/core';
import { FormacionAcademica } from '../../../models/hoja-de-vida';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.html',
  styleUrl: './formacion.css',
})
export class Formacion {
  estudios: FormacionAcademica[] = [
    {
      titulo: 'Ingeniería de Sistemas y Electrónica',
      institucion: 'Unidad Central del Valle del Cauca',
      periodo: '2022 - Actualidad',
      detalle: 'Énfasis en desarrollo de software, redes y sistemas embebidos.',
    },
    {
      titulo: 'Bachiller Académico',
      institucion: 'Institución Educativa Departamental',
      periodo: '2016 - 2021',
      detalle: 'Graduado con mención en matemáticas y tecnología.',
    },
    {
      titulo: 'Curso de Arduino y Electrónica Básica',
      institucion: 'Plataforma en línea',
      periodo: '2023',
      detalle: '40 horas de práctica con sensores y microcontroladores.',
    },
  ];
}
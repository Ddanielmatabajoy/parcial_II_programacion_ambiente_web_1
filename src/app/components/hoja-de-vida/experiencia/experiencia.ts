import { Component } from '@angular/core';
import { ExperienciaItem } from '../../../models/hoja-de-vida';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.css',
})
export class Experiencia {
  experiencias: ExperienciaItem[] = [
    {
      cargo: 'Auxiliar de soporte técnico',
      lugar: 'Tecnoservicios del Valle',
      periodo: '2024 - 2025',
      descripcion: 'Mantenimiento de equipos, instalación de redes y atención a usuarios.',
      tecnologias: ['Redes', 'Windows', 'Linux'],
    },
    {
      cargo: 'Proyecto: Estación meteorológica IoT',
      lugar: 'Proyecto de semillero',
      periodo: '2024',
      descripcion: 'Medición de temperatura y humedad con ESP32 y panel web para ver los datos.',
      tecnologias: ['ESP32', 'C++', 'JavaScript'],
    },
    {
      cargo: 'Proyecto: Sistema de inventario web',
      lugar: 'Proyecto académico',
      periodo: '2025',
      descripcion: 'Aplicación para gestionar productos y existencias de una tienda local.',
      tecnologias: ['Angular', 'Bootstrap', 'Git'],
    },
  ];
}
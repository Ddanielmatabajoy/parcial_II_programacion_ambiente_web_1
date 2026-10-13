import { Component } from '@angular/core';
import { PerfilInfo } from '../../../models/hoja-de-vida';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  perfil: PerfilInfo = {
    nombre: 'Daniel Esteban Matabajoy Romero',
    edad: 23,
    carrera: 'Estudiante de Ingeniería de Sistemas y Electrónica',
    semestre: 'Séptimo semestre',
    descripcion:
      'Apasionado por unir el software con el hardware. Me interesan el desarrollo web, los sistemas embebidos y la automatización. Disfruto resolver problemas en equipo y aprender tecnologías nuevas.',
  };
}
import { Component } from '@angular/core';
import { Perfil } from '../../components/hoja-de-vida/perfil/perfil';
import { Contacto } from '../../components/hoja-de-vida/contacto/contacto';
import { Formacion } from '../../components/hoja-de-vida/formacion/formacion';
import { Habilidades } from '../../components/hoja-de-vida/habilidades/habilidades';
import { Experiencia } from '../../components/hoja-de-vida/experiencia/experiencia';

@Component({
  selector: 'app-hoja-de-vida',
  imports: [Perfil, Contacto, Formacion, Habilidades, Experiencia],
  templateUrl: './hoja-de-vida.html',
  styleUrl: './hoja-de-vida.css',
})
export class HojaDeVida {}
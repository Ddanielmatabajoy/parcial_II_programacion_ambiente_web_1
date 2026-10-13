import { Component } from '@angular/core';
import { ContactoInfo } from '../../../models/hoja-de-vida';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  contactos: ContactoInfo[] = [
    { icono: '✉️', etiqueta: 'Correo', valor: 'daniel.matabajoy@ejemplo.com' },
    { icono: '📱', etiqueta: 'Teléfono', valor: '+57 300 123 4567' },
    { icono: '📍', etiqueta: 'Ubicación', valor: 'Tuluá, Valle del Cauca' },
    { icono: '💻', etiqueta: 'GitHub', valor: 'github.com/tu-usuario' },
  ];
}

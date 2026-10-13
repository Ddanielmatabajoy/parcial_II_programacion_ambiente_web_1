export interface PerfilInfo {
  nombre: string;
  edad: number;
  carrera: string;
  semestre: string;
  descripcion: string;
}

export interface ContactoInfo {
  icono: string;
  etiqueta: string;
  valor: string;
}

export interface FormacionAcademica {
  titulo: string;
  institucion: string;
  periodo: string;
  detalle: string;
}

export interface Habilidad {
  nombre: string;
  nivel: number; // 0 a 100
  categoria: 'Programación' | 'Electrónica' | 'Herramientas' | 'Blandas';
}

export interface ExperienciaItem {
  cargo: string;
  lugar: string;
  periodo: string;
  descripcion: string;
  tecnologias: string[];
}
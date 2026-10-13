export interface TemaAprendizaje {
  id: number;
  icono: string;
  titulo: string;
  descripcion: string;
  categoria: 'Fundamentos' | 'Angular' | 'Herramientas';
  tecnologias: string[];
  conocimientos: string[];
}

export interface ProyectoCurso {
  id: number;
  nombre: string;
  tipo: 'Parcial' | 'Taller' | 'Proyecto';
  descripcion: string;
  tecnologias: string[];
  estado: 'Completado' | 'En progreso';
}
export interface ItemTemaLibre {
  id: number;
  titulo: string;
  genero: 'Aventura' | 'RPG' | 'Deportes' | 'Plataformas' | 'Sandbox';
  plataforma: string;
  anio: number;
  calificacion: number;
  descripcion: string;
  destacado: boolean;
}
export interface Reserva {
  id?: string;
  id_medicamentos: string;
  cantidad: string;
  nombre: string;
  paterno: string;
  ci: string;
  fecha: string;
  entregado: boolean;
  createdAt?: string;
  producto?: Product[];
}

export interface Product {
  product: string;
  cantidad: number;
}

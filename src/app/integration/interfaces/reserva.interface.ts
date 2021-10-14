export interface Reserva {
  usuario: string;
  products: Product[];
  fecha: string;
  entregado: boolean;
}

interface Product {
  product: string;
  cantidad: number;
}

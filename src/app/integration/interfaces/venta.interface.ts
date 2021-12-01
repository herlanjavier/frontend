export interface Venta {
  id?: string;
  id_producto?: string;
  fecha_venta: string;
  cantidad: number;
  costo: number;
  estado?: boolean;
  nombre_producto?: string;
}

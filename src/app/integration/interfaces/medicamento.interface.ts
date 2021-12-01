export interface Medicamento {
  id?: string;
  nombre_generico: string;
  nombre: string;
  laboratorio: string;
  medida: string;
  tipo: string;
  precio: string;
  item: string;
  dosis: string;
  descripcion: string;
  fecha_vencimiento: any;
  cantidad?: number;
  cant_compra: number;
}

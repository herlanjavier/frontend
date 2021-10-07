export interface Usuario {
  id?: number;
  nombre: string;
  paterno?: string;
  materno?: string;
  email: string;
  password: string;
  estado?: boolean;
}

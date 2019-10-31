import { Usuario } from './usuario';

export class Cliente extends Usuario {
  constructor(
    nombre: string,
    apellido: string,
    dni: string,
    foto: string,
    activo: boolean,
    email: string,
    rol: string
  ) {
    super(nombre, apellido, dni, foto, activo, email, rol);
  }
}

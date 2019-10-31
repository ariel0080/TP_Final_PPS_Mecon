import { Usuario } from './usuario';

export class Empleado extends Usuario {
  public cuil: string;
  public tipoEmpleado: string;

  constructor(
    nombre: string,
    apellido: string,
    dni: string,
    foto: string,
    activo: boolean,
    email: string,
    rol: string,
    cuil: string,
    tipoEmpleado: string
  ) {
    super(nombre, apellido, dni, foto, activo, email, rol);
    this.cuil = cuil;
    this.tipoEmpleado = tipoEmpleado;
  }
}
